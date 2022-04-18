import db from "../database/db.js";
import { DataTypes } from "sequelize";

import TicketModel from "./TicketModel.js"

import  EstadosModel from"./Catalogos/EstadosModel.js"



const UsuarioModel= db.define("Usuaria",{
    Nombre :{
        type:DataTypes.STRING,
        allowNull: false,
    },
    ApellidoPaterno:{
        type:DataTypes.STRING,
        allowNull: true,
        validate:{
               isAlpha:{
                   args:true,
                   msg:"Los apellidos solo pueden contener letras"
               }
        }
      
    },

    ApellidoMaterno:{
      type:DataTypes.STRING,
      allowNull: true,
      validate:{
             isAlpha:{
                 args:true,
                 msg:"Los apellidos solo pueden contener letras"
             }
      }
    
    },

    NickName :{
        type:DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'El NickName necesita ser unico'  //TODO  msg
        }
    },

    Pass :{
        type:DataTypes.STRING,
        allowNull: false,
        
    },
    
    
    FechaNacimiento:{
      type:DataTypes.DATE,
        allowNull: true,
    },

    Ciudad:{
      type:DataTypes.STRING,
      allowNull: true,
    },

    
    PerfilFB:{
      type:DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'El enlace a FB ya se habia registrado' 
      },

      validate:{
        isUrl:{
            args:true,
            msg:"El perfil de FB no tiene formato apropiado"
        }
      }

    },


    Email:{
      type:DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'Este correo ya se habia registrado' 
      },

      validate:{
        isEmail:{
            args:true,
            msg:"No se introdujo un correo valido"
        }
      }
    },

    Telefono:{
      type:DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'Este numero telefonico ya se habia registrado' 
      },

      validate:{
        isNumeric:{
            args:true,
            msg:"El telefono solo puede contener numeros con su lada "
        }
      }
    },



    

                        /***************************CATALOGOS********************/
    Rol:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },

    EntidadFederativa:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 34
    },
    Estatus:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
   

   
});


UsuarioModel.Estado = UsuarioModel.belongsTo(EstadosModel,{as:"Estado",foreignKey:"EntidadFederativa"})
//UsuarioModel.tieneTickets = UsuarioModel.hasMany(TicketModel,{as:"Generadora",foreignKey:"Usuaria"})
UsuarioModel.TicketsSuyos = TicketModel.belongsTo(UsuarioModel,{as:"Creadora",foreignKey:"Usuaria"})


//UsuarioModel.relEstado = EstadosModel.hasMany(UsuarioModel,{as:"Habitantes",foreignKey:"EntidadFederativa"})


export default UsuarioModel;