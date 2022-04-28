import express from 'express';
import TicketController from '../controllers/TicketController.js'

const router = express.Router();



router.get("/",TicketController.listar);
router.get("/:id",TicketController.obtener);
router.post("/",TicketController.crear);
router.put("/:id",TicketController.actualizar);
router.delete("/:id",TicketController.eliminar);

export default router;