import db from "../database/db.js";
import { DataTypes } from "sequelize";


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
    PrimerMedioContacto:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'El medio de contacto necesita ser unico' 
        }
    },
    
    FechaNacimiento:{
      type:DataTypes.DATE,
        allowNull: true,
    },

    Ciudad:{
      type:DataTypes.STRING,
      allowNull: true,
    },

    
    FechaIngreso:{
      type:DataTypes.DATE,
     /* defaultValue: Sequelize.NOW, */
        allowNull: false,
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
      defaultValue: 9
    },
    Estatus:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
   

   
}, { timestamps: false });

export default UsuarioModel;