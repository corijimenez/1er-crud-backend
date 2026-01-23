import { Router } from "express";
import { prueba, crearServicio, listarServicios, obtenerServicioId, editarServicio, borrarServicio } from "../controllers/servicios.controllers.js";
import validacionServicio from "../middlewares/validacionServicio.js";

const router = Router();

//aqui diseñamos todas las rutas para trabajar con los servicios
//get - post - put o patch - delete

router.route("/test").get(prueba);
//http://localhost:3000/api/servicios/
router.route("/").post([validacionServicio],crearServicio).get(listarServicios)
router.route("/:id").get(obtenerServicioId).put(editarServicio).delete(borrarServicio)


export default router;
