import express from 'express';
import appControler from '../controllers/appController.js'

const router = express.Router();


//MIDDLEWARE
//AGREGAR MIDLEWARE


//acceder solo sin contraseña
router.post("/login",appControler.login);
router.post("/registrarse",appControler.registrarse);

//acceder logeado
router.get("/logout",appControler.logout); //cambiar a post para que sea mas dificik salir, no solo conun enlace

router.get("/MisAsignaciones",appControler.misAsignaciones);
router.get("/MisTickets",appControler.misTickets);






export default router;