import  {Sequelize} from 'sequelize'
const db =  new Sequelize("sysFAB","root","",{
    host: 'localhost',
    port: '8696',
    dialect:"mysql",
    logging: false

});

export default db;


