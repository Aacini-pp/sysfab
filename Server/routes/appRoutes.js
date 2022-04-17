import express from 'express';
import appControler from '../controllers/appController.js'

const router = express.Router();




router.post("/login",appControler.login);
router.get("/logout",appControler.logout);

export default router;