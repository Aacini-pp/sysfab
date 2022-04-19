import UsuarioModel from "../models/UserModel.js";
import TicketModel from "../models/TicketModel.js";
import AsignacionCasoModel from "../models/AsignacionCasoModel.js";

import relaciones from "../models/relacions.js"


const UsuarioControler={}


UsuarioControler.listar=async(req,res)=>{
    console.log("UsuariotControler.listar");
    try {
       const usuarios =   await  UsuarioModel.findAll ({
        // Queremos que incluya la relaciónes
        include: [
            {association: relaciones.Usuaria.Estado},
            {association: relaciones.Usuaria.Rol},
            {association: relaciones.Usuaria.Estatus}
            ,{association: relaciones.Usuaria.Tickets}
        ]
    });
       res.json (usuarios);
    } catch (error) {
        console.log(error);  
        res.status(400)
        res.json(  {  message :error.message }   );
    }
   
} 

UsuarioControler.obtener=async(req,res)=>{
    console.log("UsuariotControler.obtener");   

    try {
        const usuario= await UsuarioModel.findAll({
            where: { id: req.params.id},
            include: [
                {association: relaciones.Usuaria.Estado},
                {association: relaciones.Usuaria.Rol},
                {association: relaciones.Usuaria.Estatus}
            ]
        });

        res.json (usuario);
    } catch (error) {
        console.log(error);   
        res.status(400)
        res.json(  {  message :error.message }   );
    }

   
}


UsuarioControler.crear=async(req,res)=>{
  console.log("UsuariotControler.crear ");
    try {
        await UsuarioModel.create(req.body);
        res.json(  {  message :"Registro creado Correctamente" }   );

    } catch (error) {
        console.log(error);  
        res.status(400)
        res.json(  {  message :error.message }   );
    }

}


UsuarioControler.actualizar=async(req,res)=>{
    console.log("UsuariotControler.actualizar");
   try {
       await UsuarioModel.update(req.body,{
           where: {id: req.params.id  }
       });

       res.json(  {  message :"Registro actualizado Correctamente" }   );

   } catch (error) {
    res.status(400)
    res.json(  {  message :error.message }   );
   }

}


UsuarioControler.eliminar=async (req,res)=>{
    console.log("UsuariotControler.eliminar")

    try {
        await UsuarioModel.destroy({
            where: {id: req.params.id  }
        });
 
        res.json(  {  message :"Registro eliminado Correctamente" }   );
 
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }
    
}



UsuarioControler.misTickets=async (req,res)=>{
    console.log("UsuariotControler.misTickets")

    try {
        const ticket= await TicketModel.findAll({
            where: {Usuaria:req.session.usuaria.id },
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


UsuarioControler.misAsignaciones = async(req,res)=>{
    console.log("UsuarioControler.misAsignaciones ");
    try {
       const casos =   await  AsignacionCasoModel.findAll ({
        where: {Voluntaria: req.session.usuaria.id },
        // Queremos que incluya la relación "Estado"
        include: [
            {association:relaciones.AsignacionCaso.Ticket},
            {association:relaciones.AsignacionCaso.Estatus},
        ]
    });
       res.json (casos);
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }
   
} 









export default UsuarioControler




