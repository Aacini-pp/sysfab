import TicketModel from "../models/TicketModel.js";
import UsuarioModel from "../models/UserModel.js";

import relaciones from "../models/relacions.js"

const TicketControler={}


TicketControler.listar=async(req,res)=>{
    console.log("UsuariotControler.listar");
    try {
       const tickets =   await  TicketModel.findAll ({
        // Queremos que incluya la relación "Estado"
        include: [
            {association:relaciones.Tickets.Usuaria},
            {association:relaciones.Tickets.Estatus},
            {association:relaciones.Tickets.Semaforo}

            
        ]
    });
       res.json (tickets);
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }
   
} 

TicketControler.obtener=async(req,res)=>{
    console.log("UsuariotControler.obtener");   

    try {
        const ticket= await TicketModel.findAll({
            where: { id: req.params.id},
            include: [
                {association:relaciones.Tickets.Usuaria},
                {association:relaciones.Tickets.Estatus},
                {association:relaciones.Tickets.Semaforo}
            ]
        });

        res.json (ticket);
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }

   
}


TicketControler.crear=async(req,res)=>{
  console.log("UsuariotControler.crear ");
    try {
        await TicketModel.create({
            Usuaria: 1 /*TODO req.session.usuaria.id */,
            Descripcion:req.body.Descripcion
        });
        res.json(  {  message :"Registro creado Correctamente" }   );

    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }

}


TicketControler.actualizar=async(req,res)=>{
    console.log("UsuariotControler.actualizar");
   try {
       await TicketModel.update(req.body,{
           where: {id: req.params.id  }
       });

       res.json(  {  message :"Registro actualizado Correctamente" }   );

   } catch (error) {
    res.status(400)
    res.json(  {  message :error.message }   );
   }

}


TicketControler.eliminar=async (req,res)=>{
    console.log("UsuariotControler.eliminar")

    try {
        await TicketModel.destroy({
            where: {id: req.params.id  }
        });
 
        res.json(  {  message :"Registro eliminado Correctamente" }   );
 
    } catch (error) {
        res.status(400)
        res.json(  {  message :error.message }   );
    }
    
}

export default TicketControler

