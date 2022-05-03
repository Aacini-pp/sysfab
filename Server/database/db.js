import  {Sequelize} from 'sequelize'
const db =  new Sequelize("fab2","aacini","aacini",{
    host: '192.168.64.2',
    dialect:"mysql"
 
});



export default db;