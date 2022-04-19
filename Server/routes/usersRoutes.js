import express from 'express';
import UserController from '../controllers/UserController.js'

const router = express.Router();

router.get("/MisTickets",UserController.misTickets);
router.get("/MisAsignaciones",UserController.misAsignaciones);



router.get("/",UserController.listar);
router.get("/:id",UserController.obtener);
router.post("/",UserController.crear);
router.put("/:id",UserController.actualizar);
router.delete("/:id",UserController.eliminar);




export default router;