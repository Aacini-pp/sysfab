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
    optSession(socket.handshake, {}, next);
})




io.on('connection', socket => {
    console.log("sessionSocket: ")
    console.log("sessionSocket: ", socket.handshake.session)
    //si el usuario no esta seteado desconectar socket.disconnect(true)

    socket.on("conectado", (arg) => {
        console.info(`Usuario conectado: `, arg)
        console.log("sessionSocket conectado: ", socket.handshake.session)
    })

    socket.on("mensaje", (NickName, mensaje) => {
        console.info(`mensaje recivido`, NickName, mensaje)
        console.log("sessionSocket mensaje: ", socket.handshake.session)
        io.emit('mensajes', { NickName, mensaje })
    })

    socket.on("Emergencia", (Usuaria, mensaje) => {
        console.info(`Emergencia recibida:`, Usuaria.id, mensaje)
        console.log("sessionSocket Emergencia: ", socket.handshake.session)
        //emitir a las coordinadoras 
        //emitir a su voluntaria si tiene caso
        io.emit('Emergencias>42', { Usuaria, mensaje })

    })








    socket.on("disconnect", (arg) => {
        console.info(`Usuario desconectado: `, arg)
        io.emit('mensajes', { servidor: "Servidor", mensaje: "Ha abandonado la sala" })
    })


});










httpServer.listen(8080, () => {
    console.log("Servidor corriendo")
})

/*
app.listen(8080, () => {
    console.log("Servidor corriendo")
})*/