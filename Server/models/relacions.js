import UsuarioModel from "./UserModel.js"
import TicketModel from "./TicketModel.js"
import AsignacionCasoModel from "./AsignacionCasoModel.js"

import EstadosModel from "./Catalogos/EstadosModel.js"
import RolesModel from "./Catalogos/RolesModel.js"
import EstatusModel from "./Catalogos/EstatusModel.js"
import SemaforoModel from "./Catalogos/SemaforoModel.js"

import EmailRecuperacionModel from "./EmailRecuperacionModelModel.js"


/**Contiene la relacion de  todas las entidaes */


const Relaciones={
    Usuaria:{
        Estado:UsuarioModel.belongsTo(EstadosModel,{as:"deEstado",foreignKey:"EntidadFederativa"}),
        Rol:UsuarioModel.belongsTo(RolesModel,{as:"deRol",foreignKey:"Rol"}),
        Estatus:UsuarioModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"}),
        Tickets: UsuarioModel.hasMany(TicketModel,{as:"susTickets",foreignKey:"Usuaria"}),

       
    },
   /* Voluntaria:{
      Ticket:UsuarioModel.belongsToMany(TicketModel, {
        through: 'AsignacionCaso',
        foreignKey: 'Voluntaria', // replaces `productId`
        otherKey: 'Ticket' // replaces `categoryId`
      }),
    }, */
    Tickets :{
        Usuaria:TicketModel.belongsTo(UsuarioModel,{as:"deUsuaria",foreignKey:"Usuaria"}), 
        Estatus:TicketModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"}),
        Semaforo:TicketModel.belongsTo(SemaforoModel,{as:"deSemaforo",foreignKey:"Semaforo_id"}),
    },
    AsignacionCaso:{
        Usuaria: AsignacionCasoModel.belongsTo(UsuarioModel,{as:"deVoluntaria",foreignKey:"Voluntaria"}),
        Ticket: AsignacionCasoModel.belongsTo(TicketModel,{as:"deTicket",foreignKey:"Ticket"}), 
        Estatus:AsignacionCasoModel.belongsTo(EstatusModel,{as:"deEstatus",foreignKey:"Estatus"}),
    },
   EmailRecuperacion:{
        Usuaria: EmailRecuperacionModel.belongsTo(UsuarioModel,{as:"deUsuaria",foreignKey:"Usuaria"}),
    }   
}
export default Relaciones