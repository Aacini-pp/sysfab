import  {Sequelize} from 'sequelize'
const db =  new Sequelize("fab4","root","",{
    host: 'localhost',
    port: '3333',
    dialect:"mysql"

});



export default db;
