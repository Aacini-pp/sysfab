import express from 'express';
//import EstadosControler from '../../controllers/Catalogos/EstadosController.js'
 import CatControler from '../../controllers/Catalogos/CatController.js'

import sessionCoordinadora from '../../middleware/sessionCoordinadora.js'

const router = express.Router();


//MIDDLEWARE
/*
router.post("/",sessionCoordinadora);
router.put("/:id",sessionCoordinadora);
router.delete("/:id",sessionCoordinadora);
*/




router.get("/Estatus",CatControler.listarEstatus);
router.get("/Roles",CatControler.listarRoles);
router.get("/Semaforo",CatControler.listarSemaforo);


router.get("/Voluntarias",CatControler.listarVoluntarias);


export default router;