import { param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionIdServicio = [
  param('id').isMongoId().withMessage('El id del servicio no corresponde con un id de MongoDB válido'),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionIdServicio;
