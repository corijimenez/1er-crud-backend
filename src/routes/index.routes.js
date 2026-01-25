import { Router } from "express";
import serviciosRoutes from "./servicios.routes.js";
import usuarioRoutes from "./usuarios.routes.js";

const router = Router()

//http:localhost:3000/api/servicios/test
router.use('/servicios', serviciosRoutes)
router.use('/usuarios', usuarioRoutes)

export default router;
