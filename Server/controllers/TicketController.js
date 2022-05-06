import axios from 'axios'

import TicketModel from "../models/TicketModel.js";
import UsuarioModel from "../models/UserModel.js";

import relaciones from "../models/relacions.js"

/**
 * Esta funcion se encargara de consultar la api de google para consultas analisis de sentimientos de google
 * oara regresar el valor menor de sus items
 */
let analisisCasos = async function  (descripcion)  {
    const secreetKey ="AIzaSyAdhkuz10po_ShRex2W93Vcbpb10Lqp32w"
    const APIgoogle = "https://language.googleapis.com/v1/documents:analyzeSentiment?key="+secreetKey
   
    
    var data = { 
        "document":{
            "type":"PLAIN_TEXT",
            "content":descripcion,         
            "language": "es"
        },
        "encodingType":"UTF8"
            
    }
     let minVal= 1
     const res =  await  axios.post(APIgoogle,data).then((response) => {
           console.log("Consulta api response",response.data);
           response.data.sentences.forEach((sentence) => {
               console.log("sentence",sentence)
               if(sentence.sentiment.score < minVal){
                    minVal = sentence.sentiment.score
               }
                
           })
           
       }).catch(error => {
           console.error("Consulta api error",error)
           
       });
       
       return  {min: minVal, semaforo:Math.ceil(minVal*-5)+5};

}

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

            
        ],
        order: [ ['Estatus', 'DESC'],['Semaforo_id', 'DESC'], ['id', 'ASC']]
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


TicketControler.crear=async (req,res)=>{
  console.log("UsuariotControler.crear ");

    //analizar texto 
    const resp = await analisisCasos(req.body.Descripcion)
    console.log(resp);
    
    try {
        await TicketModel.create({
            Usuaria: 1, //TODO req.session.usuaria.id 
            Descripcion:req.body.Descripcion,
            Semaforo_id:resp.semaforo
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

