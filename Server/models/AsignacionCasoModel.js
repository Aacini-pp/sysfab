import db from "../database/db.js";
import { DataTypes } from "sequelize";


const AsignacionCasoModel= db.define("AsignacionCaso",{
   Ticket:{
    type:DataTypes.INTEGER,
    allowNull: false
    
    },
    Voluntaria:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

      Estatus:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
   
}, { freezeTableName: true});

export default AsignacionCasoModel;