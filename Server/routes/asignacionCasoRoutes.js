import express from 'express';
import AsignacionCasoController from '../controllers/AsignacionCasoController.js'

const router = express.Router();




router.get("/",AsignacionCasoController.listar);
router.get("/:id",AsignacionCasoController.obtener);
router.post("/",AsignacionCasoController.crear);
router.put("/:id",AsignacionCasoController.actualizar);
router.delete("/:id",AsignacionCasoController.eliminar);

export default router;