import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import usersRoutes from './routes/usersRoutes.js'



const app= express();


app.use(cors());
app.use(express.json());

app.use("/Usuarios",usersRoutes);


try {
    await db.authenticate();
    console.log("Conexxion a la BD")
} catch (error) {

    console.log(`Error en la conexxion:  ${error} `)
}




app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})



app.listen(8080,()=>{
    console.log("Servidor corriendo")
})