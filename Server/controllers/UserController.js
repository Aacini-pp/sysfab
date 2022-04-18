import UsuarioModel from "../models/UserModel.js";



const UsuarioControler={}


UsuarioControler.listar=async(req,res)=>{
    console.log("UsuariotControler.listar");
    try {
       const usuarios =   await  UsuarioModel.findAll ({
        // Queremos que incluya la relación "oficina"
        include: [
            {
                association: UsuarioModel.Estado
            }
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
            where: { id: req.params.id}
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

export default UsuarioControler




