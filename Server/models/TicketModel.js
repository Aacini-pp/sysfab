import db from "../database/db.js";
import { DataTypes } from "sequelize";




const TicketModel= db.define("Usuaria",{
   
    Usuaria:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },


    Semaforo_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      
    
    Descripcion:{
        type:DataTypes.STRING,
        allowNull: true,
        validate:{
            isAlphanumeric:{
                   args:true,
                   msg:"La descripcion solo acepta valores alfanumercos"
               }
        }
      
    }, 

   
}, { timestamps: false });

export default TicketModel;