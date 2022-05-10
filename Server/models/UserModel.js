import db from "../database/db.js";
import { DataTypes } from "sequelize";


/**
 //TODO Encontrar como mandar mensajes personalizados para  unique o quitarles el mensaje 
 */


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
        allowNull: false, //TODO: tiene que tener letras pero no simbolos @
        unique: {
          msg: 'El NickName necesita ser unico'  //TODO  msg
        }
    },

    Pass :{
        type:DataTypes.STRING,
        allowNull: false,
        /**
         * set(value) {
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      this.setDataValue('password', hash(value));
      }
         * 
         */
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

    Telefono:{ //TODO:EL NUMERO DEVE TENER LONGITUD DE NUMERO CON LADA
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
   

   
}
, {
  //validacion almenos un medio de contacto
  validate: {
    medioDeContacto() {
       console.log("medioDeContacto", this.Email,this.Telefono,this.PerfilFB)
      if ( ( this.Email === null) &&  (this.Telefono === null) &&  (this.PerfilFB === null)   ) {
        throw new Error('Tiene que especificarse almenos un medio de contacto (Telefono , Email o Perfil de facebook)');
      }
    }
  }
}

);

export default UsuarioModel;