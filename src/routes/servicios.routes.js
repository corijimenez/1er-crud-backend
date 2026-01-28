import { Router } from "express";
import {
  prueba,
  crearServicio,
  listarServicios,
  obtenerServicioId,
  editarServicio,
  borrarServicio,
} from "../controllers/servicios.controllers.js";
import validacionServicio from "../middlewares/validacionServicio.js";
import validacionIdServicio from "../middlewares/validacionIdServicio.js";
import verificarJWT from "../middlewares/verificarJWT.js";

const router = Router();

//aqui diseñamos todas las rutas para trabajar con los servicios
//get - post - put o patch - delete

router.route("/test").get(prueba);
//http://localhost:3000/api/servicios/
router
  .route("/")
  .post([verificarJWT ,validacionServicio], crearServicio)
  .get(listarServicios);
router
  .route("/:id")
  .get(obtenerServicioId)
  .put([validacionIdServicio, validacionServicio], editarServicio)
  .delete([validacionIdServicio], borrarServicio);

export default router;
