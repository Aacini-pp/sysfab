import UsuarioModel from "./UserModel.js"
import TicketModel from "./TicketModel.js"
import AsignacionCasoModel from "./AsignacionCasoModel.js"

import EstadosModel from "./Catalogos/EstadosModel.js"
import RolesModel from "./Catalogos/RolesModel.js"
import EstatusModel from "./Catalogos/EstatusModel.js"
import SemaforoModel from "./Catalogos/SemaforoModel.js"


/**Contiene la relacion de  todas las entidaes */


const Relaciones={
    Usuaria:{
        Estado:UsuarioModel.belongsTo(EstadosModel,{as:"deEstado",foreignKey:"EntidadFederativa"}),
        Rol:UsuarioModel.belongsTo(RolesModel,{as:"deRol",foreignKey:"Rol"}),
        Estatus:UsuarioModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"}),
        Tickets: UsuarioModel.hasMany(TicketModel,{as:"susTickets",foreignKey:"Usuaria"})
    },  
    Tickets :{
        Usuaria:TicketModel.belongsTo(UsuarioModel,{as:"deUsuaria",foreignKey:"Usuaria"}), 
        Estatus:TicketModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"})
    },
    AsignacionCaso:{
        Usuaria: AsignacionCasoModel.belongsTo(UsuarioModel,{as:"deVoluntaria",foreignKey:"Voluntaria"}),
        Ticket: AsignacionCasoModel.belongsTo(TicketModel,{as:"deTicket",foreignKey:"Ticket"}), 
        Estatus:AsignacionCasoModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"}),
    }   
}
export default Relaciones