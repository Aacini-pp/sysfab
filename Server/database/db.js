import  {Sequelize} from 'sequelize'
const db =  new Sequelize("fab2","root","",{
    host: 'localhost',
    dialect:"mysql"

});



export default db;