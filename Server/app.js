import 'dotenv/config'

import http from 'http';
import express from 'express';
import { Server as WebSocketServer } from 'socket.io';

import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import cors from 'cors';
import db from './database/db.js';


//entidades
import usersRoutes from './routes/usersRoutes.js'
import ticketsRoutes from './routes/ticketsRoutes.js'
import asignacionCasoRoutes from './routes/asignacionCasoRoutes.js'

//catalogos
import EstadosRoutes from './routes/Catalogos/estadosRoutes.js'
import CatRoutes from './routes/Catalogos/catRoutes.js'


//aplicacion
import appRoues from './routes/appRoutes.js'


//middlewares

import sessionMiddleware from './middleware/session.js'
import sessionCoordinadora from './middleware/sessionCoordinadora.js'


import UsuarioModel from "./models/UserModel.js"
import EmergenciaModel from "./models/EmergenciaModel.js"
import AsignacionCasoModel from "./models/AsignacionCasoModel.js";
import TicketModel from "./models/TicketModel.js";
import relaciones from "./models/relacions.js"


const app = express();
const httpServer = http.createServer(app);

app.use(express.static('public'));
app.use(cors()); //permitir cruce de dominio
app.use(express.json());

try {
    await db.authenticate();
    console.log("Conexxion a la BD")
} catch (error) {

    console.log(`Error en la conexxion:  ${error} `)
}


//guardar session en la base de datos
var SessionStore = SequelizeStore(session.Store);
var myStore = new SessionStore({
    db: db,
});
let optSession = session({
    store: myStore,
    secret: '6e3df1e2bccb9e5eea0d1822814ed45f',// FAB en MD5 = 6e3df1e2bccb9e5eea0d1822814ed45f
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
})

//myStore.sync() //crear la tabla  de session

app.use(optSession); //Palabra secreta para sesiones


//rutas

//URL App
app.use("/", appRoues);

/**API*/
app.use("/Usuarios", usersRoutes);
app.use("/Tickets", ticketsRoutes);
app.use("/AsignacionCaso", asignacionCasoRoutes);



app.use("/Cat", CatRoutes);
app.use("/Cat/Estados", EstadosRoutes);



//sockets



const io = new WebSocketServer(httpServer, {

    cors: {//TODO:quitar  en prod
        origin: "http://localhost:3000"
    }
});


//midleware para acceder a las seciones de express-session
io.use(function (socket, next) {
    optSession(socket.handshake, {}, next); //em eñ apreton de manos acceder a las session de express
})




io.on('connection', async (socket) => {

    let coordinadoras = [] //cada cuanto volver a cargar las coordinadoras ? 

    try {
        const coords = await UsuarioModel.findAll({
            where: { Rol: 4 },
        });
        coords.map((coordinadora) => {
            coordinadoras.push(coordinadora.id)
        })
    } catch (error) {
        console.log(error);
    }
    console.log("Cordinadoras: ", coordinadoras)

    console.log("sessionSocket: ", socket.handshake.session)
    //si el usuario no esta seteado desconectar socket.disconnect(true)

    //mandar todas las emergencias que tenga  atrasadas

    socket.on("conectado", (arg) => {
        console.info(`Usuario conectado: `, arg)
        console.log("sessionSocket conectado: ", socket.handshake.session)
    })

    socket.on("mensaje", (NickName, mensaje) => {
        console.info(`mensaje recivido`, NickName, mensaje)
        console.log("sessionSocket mensaje: ", socket.handshake.session)
        io.emit('mensajes', { NickName, mensaje })
    })

    socket.on("Emergencia", async (mensaje) => {

        let Usuaria = mensaje.Usuaria //conseguir esta info de la session   socket.handshake.session.Usuaria

        console.info(`Emergencia recibida:`, mensaje)

        //console.log("sessionSocket Emergencia: ", socket.handshake.session)


        //registrar el ticket 
        let regEmergencia = null
        let Voluntarias = []
        try {
            await EmergenciaModel.create({ //todo: tiene q  ue devolver el registro para tener el id y la hora 
                Victima: Usuaria.id,
                Voluntaria_Atendio: null,
                Estatus: 2,
                Ubicacion: JSON.stringify(mensaje.Coordenadas) || ""
            }).then(function (reg) {
                regEmergencia = reg.dataValues
            });;
        } catch (error) {
            console.log(error.message)
        }

        //buscar sus casos  con sus respectivas voluntarias
        const casos = await AsignacionCasoModel.findAll({
            // Queremos que incluya la relaciónES
            include: [
                {
                    where: { Usuaria: Usuaria.id },
                    association: relaciones.AsignacionCaso.Ticket,
                },
                { association: relaciones.AsignacionCaso.Usuaria, },
                { association: relaciones.AsignacionCaso.Estatus },
            ]
        });

        casos.map((caso) => {

            if (!Voluntarias.includes(caso.Voluntaria) && !coordinadoras.includes(caso.Voluntaria)) {
                Voluntarias.push(caso.Voluntaria)
            }

        })

        //emitir a las coordinadoras 
        //emitir a su voluntaria si tiene caso
        let coordAndVoluntarias = coordinadoras.concat(Voluntarias)
        console.log("coordAndVoluntarias", coordAndVoluntarias)
        let emicion = { Usuaria, Coordenadas: mensaje.Coordenadas, Casos: casos, Emergencia: regEmergencia, mensaje: mensaje.msg }
        console.info(emicion)

        coordAndVoluntarias.map((vol) => {
            let canalEmitir = `Emergencias>${vol}`
            console.info(canalEmitir, "EnviandoEmergencia")

            io.emit(canalEmitir, emicion)
        })
        // io.emit('Emergencias>42', { Usuaria, Emergencia: regEmergencia, mensaje: mensaje.msg })

    })


    socket.on("disconnect", (arg) => {
        console.info(`Usuario desconectado: `, arg)
        io.emit('mensajes', { servidor: "Servidor", mensaje: "Ha abandonado la sala" })
        //emitir a su id de socket identificado por su session  .to()  para que no puedan escuchar otras personas 
    })


});










httpServer.listen(8080, () => {
    console.log(process.env)
    console.log("Servidor corriendo")
})

/*
app.listen(8080, () => {
    console.log("Servidor corriendo")
})*/