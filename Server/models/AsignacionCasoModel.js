import db from "../database/db.js";
import { DataTypes } from "sequelize";


const AsignacionCasoModel= db.define("AsignacionCaso",{
   
    Victima:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },


      Ticket:{
        type:DataTypes.INTEGER,
        allowNull: false
        
      },

      FechaAsignacion:{
        type:DataTypes.DATE,
        defaultValue: db.NOW
      },
   
}, { timestamps: false,  freezeTableName: true});

export default AsignacionCasoModel;