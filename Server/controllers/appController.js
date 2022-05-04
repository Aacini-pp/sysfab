import bd from  "../database/db.js"

import UsuarioModel from "../models/UserModel.js";
import AsignacionCasoModel from "../models/AsignacionCasoModel.js";
import TicketModel from "../models/TicketModel.js";
import relaciones from "../models/relacions.js"



const appControler={}


appControler.login=async(req,res)=>{
    console.log("appControler.login");
    
    try {
        const usuaria= await UsuarioModel.findOne({
            where: { NickName: req.body.NickName, Pass: req.body.Pass }
        }); 

        if(usuaria === null){

            console.log("El usuario que intento ingresar no estaba registrado o la contraseña  es incorrecta");
            res.status(400)
           
            res.json(  {  message :"Usuaria no encontrada o la contraseña  es incorrecta" }   );

        } else{
            req.session.usuaria = usuaria.dataValues
            console.log("Sesión creada:",req.session.usuaria);
            res.json (usuaria);
           
        }

       
    } catch (error) {
        
        res.status(400);       
        res.json(  {  message :error.message }   );

    }
    
} 

appControler.logout= (req,res)=>{
    console.log("appControler.logout");
    console.log("usuaria deslogeada",req.session.usuaria )
    req.session.destroy();
    res.json(  {  message :"Sesion finalizada" }   );

}



appControler.registrarse= async(req,res)=>{
    console.log("appControler.registrarse");
    
    
    try {
        
        //realizar una ransaccion para garantizar la atomicidad del registro con su ticket
        const result = await bd.transaction(async (t) => {

                const user = await UsuarioModel.create(req.body, {
                    include: [ relaciones.Usuaria.Tickets ]
                    ,  transaction: t 
                });
                return user;
         });

       

       
        res.json(  {  message :"Registro creado Correctamente" }   );

    } catch (error) {
        console.log(error);  
        res.status(400)
        res.json(  {  message :error.message }   );
    }

}


appControler.misTickets=async (req,res)=>{
    console.log("UsuariotControler.misTickets")

    try {
        const ticket= await TicketModel.findAll({
            where: {Usuaria:1 /*TODO req.session.usuaria.id */  },
            include: [
                {association:relaciones.Tickets.Estatus}
            ]
        });

        res.json (ticket);
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }

    
}


appControler.misAsignaciones = async(req,res)=>{
    console.log("UsuarioControler.misAsignaciones ");
    try {
       const casos =   await  AsignacionCasoModel.findAll ({
         where: { Voluntaria: 1/*TODO req.session.usuaria.id */  },
        // Queremos que incluya la relaciónES
            include: [
                {
                    association:relaciones.AsignacionCaso.Ticket,
                    include: [  {association:relaciones.Tickets.Usuaria},]
                },
                {association:relaciones.AsignacionCaso.Estatus},
       
                
              ]
         });

     

       res.json (casos);
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }
   
} 






export default appControler




