import { Router }  from "express";
import { listarUsuarios, crearUsuario} from "../controllers/usuarios.controllers.js";
const router = Router();

//http://localhost:3000/api/usuarios/

router.route("/").get(listarUsuarios).post(crearUsuario);

export default router;