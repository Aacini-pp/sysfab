import AsignacionCasoModel from "../models/AsignacionCasoModel.js";



const AsignacionCasoControler={}


AsignacionCasoControler.listar=async(req,res)=>{
    console.log("AsignacionCasoControler.listar");
    try {
       const casos =   await  AsignacionCasoModel.findAll ();
       res.json (casos);
    } catch (error) {
        res.json(  {  message :error.message }   );
    }
   
} 

AsignacionCasoControler.obtener=async(req,res)=>{
    console.log("AsignacionCasoControler.obtener");   

    try {
        const caso= await AsignacionCasoModel.findAll({
            where: { id: req.params.id}
        });

        res.json (caso);
    } catch (error) {
        res.json(  {  message :error.message }   );
    }

   
}


AsignacionCasoControler.crear=async(req,res)=>{
  console.log("AsignacionCasoControler.crear ");
  console.log(req.body);
    try {
        await AsignacionCasoModel.create(req.body);
        res.json(  {  message :"Registro AsignacionCaso creado Correctamente" }   );

    } catch (error) {
        res.json(  {  message :error.message }   );
    }

}


AsignacionCasoControler.actualizar=async(req,res)=>{
    console.log("AsignacionCasoControler.actualizar");
   try {
       await AsignacionCasoModel.update(req.body,{
           where: {id: req.params.id  }
       });

       res.json(  {  message :"Registro actualizado Correctamente" }   );

   } catch (error) {
    res.json(  {  message :error.message }   );
   }

}


AsignacionCasoControler.eliminar=async (req,res)=>{
    console.log("AsignacionCasoControler.eliminar")

    try {
        await AsignacionCasoModel.destroy({
            where: {id: req.params.id  }
        });
 
        res.json(  {  message :"Registro eliminado Correctamente" }   );
 
    } catch (error) {
        res.json(  {  message :error.message }   );
    }
    
}

export default AsignacionCasoControler

