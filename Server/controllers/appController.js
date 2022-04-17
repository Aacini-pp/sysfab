import UsuarioModel from "../models/UserModel.js";



const appControler={}


appControler.login=async(req,res)=>{
    console.log("appControler.login");
    
    try {
        const usuaria= await UsuarioModel.findOne({
            where: { NickName: req.body.NickName, Pass: req.body.Pass }
        }); 

        if(usuaria === null){

            console.log("El usuario que intento ingresar no estaba registrado");
            res.status(400)
           
            res.json(  {  message :"Usuaria no encontrada" }   );

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


export default appControler




