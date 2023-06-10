import bd from "../database/db.js"
import { Op } from "sequelize"

import UsuarioModel from "../models/UserModel.js";
import AsignacionCasoModel from "../models/AsignacionCasoModel.js";
import TicketModel from "../models/TicketModel.js";
import Premios_UsuariaModel from "../models/Premios_UsuariasModel.js";

import relaciones from "../models/relacions.js"

import TicketController from "./TicketController.js"

import EmailRecuperacionModel from "../models/EmailRecuperacionModelModel.js";
import { transporter, cargandoHTMLEmail, generarToken, generarInfoCliente } from "../mail/mail.js"

import io from '../app.js'
const appControler = {}


appControler.login = async (req, res) => {
    console.log("appControler.login");

    try {
        const usuaria = await UsuarioModel.findOne({
            where: { NickName: req.body.NickName, Pass: req.body.Pass }
        });

        if (usuaria === null) {

            console.log("El usuario que intento ingresar no estaba registrado o la contraseña  es incorrecta");
            res.status(400)

            res.json({ message: "Usuaria no encontrada o la contraseña  es incorrecta" });

        } else {
            req.session.usuaria = usuaria.dataValues
            console.log("Sesión creada:", req.session.usuaria);
            
            //TODO:ordenar esto (quitar?  ) usar  para traer casos 
        //si el usuario es voluntaria o cordinadora
        //mandar todas las emergencias que tenga  atrasadas
        //para corredinadoras  todas
        //para voluntarias las  que tienen  su caso

        //si esta logeado y 
        //si es  voluntaria o  Coordinadora quien se logeo recibir info
        
    
    /*
    if(    [3,4].includes(   req.session.usuaria.Rol  )    ){ 
        

        const parametrosConsultarEmegencias ={
            where: { Estatus: 2 }
        };
        let  emergenciasPendientes  = null;
        console.info("---------SE LOGEO UN ADMINISTRADOR");
        try {            
            emergenciasPendientes  = await EmergenciaModel.findAll(parametrosConsultarEmegencias).then(function (reg) {    
               console.log("Longitud  de  registro ",reg.length);
                reg.map( async (emergencia) => {
                    let usuariaEmergencia  = await UsuarioModel.findOne(
                        { where:{id: emergencia.Victima }}
                    );  
                    
        
                    let emicion = { 
                        Usuaria: usuariaEmergencia.dataValues, 
                        Coordenadas: emergencia.dataValues.Ubicacion,
                        Casos: {}, 
                        Emergencia: emergencia.dataValues, 
                        mensaje: "Tengo una emergencia",
                        Voluntarias:coordinadoras 
                    }
                    
                    
                    
                    let canalEmitir = `Emergencias>1` ;//${req.session.usuaria.id}
                    
                    
                    //console.info("---------emergencia"); 
                    //console.info(canalEmitir, "EnviandoEmergencia");
                    //console.info(emicion);
                    
                    io.emit(canalEmitir, emicion);
                                            
                });

                
            });

            console.log(emergenciasPendientes);
        } catch (error) {
            console.log(error.message)
        }    
    }
    */



/*
        let emicion = { 
            Usuaria: req.session.usuaria, 
            Coordenadas: { latitud: 19.4440547, longitud: -99.2156096 },
            Casos: {}, 
            Emergencia: {
                id: 120,
                Victima: 42,
                Voluntaria_Atendio: null,
                Estatus: 2,
                Ubicacion: '{"latitud":19.4440547,"longitud":-99.2156096}',
                updatedAt: '2022-11-08T01:36:49.515Z',
                createdAt: '2022-11-08T01:36:49.515Z'
            }, 
            mensaje: "Tengo una emergencia",
            Voluntarias: [ 1, 18 ] 
        }
        
        
        
        let canalEmitir = `Emergencias>1` ;//${req.session.usuaria.id}
        
        io.emit(canalEmitir, emicion);
*/


            res.json(usuaria);        
        }


    } catch (error) {
        res.status(400);
        res.json({ message: error.message.replace("Validation error: ", "") });
    }

}

    appControler.logout = (req, res) => {
    console.log("appControler.logout");
    console.log("usuaria deslogeada", req.session.usuaria)
    req.session.destroy();
    res.json({ message: "Sesión finalizada" });
}



appControler.registrarse = async (req, res) => {
    console.log("appControler.registrarse");

    try {
        //realizar una ransaccion para garantizar la atomicidad del registro con su ticket
        const result = await bd.transaction(async (t) => {
            // poner semaforo a ticckes de registrarse 

            let params = req.body
            console.log("params", params)
            //si se envio ticket 

            if (params.susTickets) {
                //analizar texto  y asignarlo al semaforo
                console.log("analisisCasos", TicketController.analisisCasos, " DESC", params)
                const resp = await TicketController.analisisCasos(params.susTickets[0].Descripcion)
                console.log("Google NLP", resp);
                params.susTickets[0]["Semaforo_id"] = resp.semaforo

            }

            const user = await UsuarioModel.create(params, {
                include: [relaciones.Usuaria.Tickets]
                , transaction: t
            });
            return user;
        });

        res.json({ message: "Registro creado correctamente" });

    } catch (error) {
        console.log(error);
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }

}





/**Recuperacion de contraseña */

//Metodo para 
appControler.PasswordOlvidado = async (req, res) => {
    console.log("appControler.PasswordOlvidado");
    let token
    let urlRecuperarpass
    let infoCLiente
    let usuaria
    //validar que exista un campo de busqueda
    //req.body.CampoBusqueda
    let { CampoBusqueda } = req.body

    if (!CampoBusqueda || CampoBusqueda == "") {
        console.log("No se ingreso informacion a buscar ")
        res.status(400)
        res.json({ message: "No se ingreso información a buscar " });
        return 0;
    }


    //buscar si esite un usuario con el correo , nickname o numerotelefonico  con el campo de busqueda
    try {
        usuaria = await UsuarioModel.findOne({
            where: { [Op.or]: [{ Email: req.body.CampoBusqueda }, { NickName: req.body.CampoBusqueda }, , { Telefono: req.body.CampoBusqueda }] }
            //
        });

        console.log("Usuaria encontrada: ", usuaria)
        if (!usuaria) {
            console.log("No se encontro coencidencia ")
            res.status(400)
            res.json({ message: "No se encontró coincidencia" });
            return 0;
        }



    } catch (error) {
        console.log("Error buscando usuaria", error)
        res.status(400)
        res.json({ message: "No se encontró coincidencia" });
        return 0;
    }

    //validar si se tiene correo registrado 
    let { Email, NickName, Nombre, id } = usuaria

    if (!Email) {
        console.log("Usuaria no tiene configurado Email ")
        res.status(400)
        res.json({ message: "No tiene configurado Email" });
        return 0;
    }


    //generar token
    token = generarToken(45) //generar token de tamaño 45
    urlRecuperarpass = " http://localhost:3000/change-password/" + token   //TODO:enviar a dotfile

    infoCLiente = {
        ...generarInfoCliente(req),
        nombre: (Nombre == NickName) ? NickName : `${Nombre} (${NickName})`, //si El nickname y el nombre son diferentes especificar los dos 
        url: urlRecuperarpass
    }

    console.log("infoCLiente ", infoCLiente)



    //enviar email 
    try { //TODO: Enviar configuraciones al mail.js
        let info = await transporter.sendMail({
            from: '"Fundacion Ana Bella 👻" <aaacini@gmail.com>', // sender address
            to: Email, // list of receivers
            subject: "Recuperacion de contraseña de FAB ✔", // Subject line

            html: cargandoHTMLEmail(infoCLiente), // html body
        });
    } catch (error) {
        console.log(error)
        res.status(400)
        res.json({ message: error });
    }


    //registrar datos
    try {
        //registrar solicitud        
        await EmailRecuperacionModel.create({
            "token": token,
            "Usuaria": id,
            "Estatus": 1,
            "IpSolicitud": infoCLiente.ip || "0.0.0.0",
            "Navegador": infoCLiente.browser,
            "SistemaOperativo": infoCLiente.os
        });

    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }
    res.json({ message: "Revise su correo para reestablecer contraseña" });

}



//vverificar si el token es valido
appControler.verificarTokenCambioPasword = async (req, res) => {
    console.log("appControler.verificarTokenCambioPasword");


    //asegurarnos que tenemos el token

    let { token } = req.params

    if (!token) {
        console.log("No se paso un token en el parametro")
        res.status(400)
        res.json({ message: "EL token ha vencido, genere uno nuevo" });
        return 0;
    }

    //buscar el token 
    try {
        let dataRecuperacion = await EmailRecuperacionModel.findOne({
            where: { token: token },
        });

        if (!dataRecuperacion) {
            console.log("No se encontro token en la BD")
            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }

        //verificar si el estatus es Activo (1)
        if (dataRecuperacion.Estatus != 1) {
            console.log("EL token ha vencido, genere uno nuevo")
            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }

        let fechaInicio = new Date(dataRecuperacion.createdAt).getTime();
        let fechaFin = Date.now();

        //calcular cuantos dias han pasado
        let diff = fechaFin - fechaInicio;
        console.log("Fecha de creacion", dataRecuperacion.createdAt, "diff", diff, "fechaFin", fechaFin, "fechaInicio", fechaInicio)
        diff = (diff / (1000 * 60 * 60 * 24)) //pasar a dias 
        if (diff > 1) {
            console.log("EL tiempo del token ha vencido, genere uno nuevo")
            //cambiar el estatus del token
            await EmailRecuperacionModel.update({
                Estatus: 3   //cambiar el estatus como baja
            }, {
                where: { token: token },
            });
            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }




        res.json({ message: "Token valido, puede cambiar su contraseña" });


    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }



}




//Cambiar la contraseña apartir de un token y la nueva contraseña
appControler.CambiarPassword = async (req, res) => {
    console.log("appControler.CambiarPassword");

    //agerurarnos qe tenemos los passwords y el token

    let { token, NewPass, ConfNewPass } = req.body

    if (!token || !NewPass || !ConfNewPass) {
        console.log("No se especificaron todos los datos ")
        res.status(400)
        res.json({ message: "Todos los campos son requeridos" });
        return 0;
    }

    //verifiacar que las conraseñan coincidan

    if (NewPass != ConfNewPass) {
        console.log("Contraseñas no coinciden")
        res.status(400)
        res.json({ message: "Contraseñas no coinciden" });
        return 0;
    }

    //buscar el token 
    try {
        let dataRecuperacion = await EmailRecuperacionModel.findOne({
            where: { token: token },
            /*  include: [ relaciones.EmailRecuperacion.Usuaria ] */
        });


        if (!dataRecuperacion) {
            console.log("No se encontro token en la BD")
            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }

        //verificar si el estatus es Activo (1)
        if (dataRecuperacion.Estatus != 1) {
            console.log("EL token ha vencido, genere uno nuevo")
            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }


        let fechaInicio = new Date(dataRecuperacion.createdAt).getTime();
        let fechaFin = Date.now();

        //calcular cuantos dias han pasado
        let diff = fechaFin - fechaInicio;
        console.log("diff", diff, "fechaFin", fechaFin, "fechaInicio", fechaInicio)
        diff = (diff / (1000 * 60 * 60 * 24)) //cuantos dias han pasado
        if (diff > 1) {
            console.log("EL tiempo del token ha vencido, genere uno nuevo")
            //cambiar el estatus del token
            await EmailRecuperacionModel.update({
                Estatus: 3   //cambiar el estatus como baja
            }, {
                where: { token: token },
            });

            res.status(400)
            res.json({ message: "EL token ha vencido, genere uno nuevo" });
            return 0;
        }


        // cambiar  la contraseña
        await UsuarioModel.update({
            Pass: NewPass
        }, {
            where: { id: dataRecuperacion.Usuaria }
        });

        //cambiar el estatus de la 
        await EmailRecuperacionModel.update({
            Estatus: 3,   //cambiar el estatus como baja
        }, {
            where: { token: token },
        });



        res.json({ message: "Contraseña cambiada correctamente" });


    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }



}





/** */


appControler.misTickets = async (req, res) => {
    console.log("appControler.misTickets")

    try {
        const ticket = await TicketModel.findAll({
            where: { Usuaria: req.session.usuaria.id },
            include: [
                { association: relaciones.Tickets.Estatus }
            ]
        });

        res.json(ticket);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }


}





appControler.MisLogros = async (req, res) => {
    console.log("appControler.MisLogros ");

    try {
        const ticket = await Premios_UsuariaModel.findAll({
            where: { Usuaria:req.session.usuaria.id },
            include: [
                { association: relaciones.Premios_Usuaria.CatPremios }
            ]
        });

        res.json(ticket);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }


}





appControler.misAsignaciones = async (req, res) => {
    console.log("UsuarioControler.misAsignaciones ");
    try {
        const casos = await AsignacionCasoModel.findAll({
            where: { Voluntaria: req.session.usuaria.id },
            // Queremos que incluya la relaciónES
            include: [
                {
                    association: relaciones.AsignacionCaso.Ticket,
                    include: [{ association: relaciones.Tickets.Usuaria },]
                },
                { association: relaciones.AsignacionCaso.Estatus },


            ]
        });



        res.json(casos);
    } catch (error) {
        res.status(400)
        res.json({ message: error.message.replace("Validation error: ", "") });
    }

}






export default appControler




