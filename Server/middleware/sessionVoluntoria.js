//var User = require("../models/user").User;
import UsuarioModel from "../models/UserModel.js";




export default function(req,res,next){
    console.log("Middleware  Corrdinadora");
     next();
     return ;
    console.log(req.session);
    if( req.session.usuaria  && req.session.usuaria.Rol >= 3){
        next();
    }else{
        res.status(400)
        res.json(  {  message :"Se necesita ser voluntaria o coordinadora " }   );  
    }


}


