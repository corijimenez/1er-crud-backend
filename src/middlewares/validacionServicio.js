import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Servicio from "../models/servicio.js";

const validacionServicio = [
  body("servicio")
    .notEmpty()
    .withMessage("El servicio es un dato obligatorio")
    .isLength({
      min: 5,
      max: 100,
    })
    .withMessage("El servicio debe tener entre 5 y 100 caracteres")
    .isString()
    .withMessage("El servicio debe ser un texto")
    .custom(async (valor, { req }) => {
      const servicioExistente = await Servicio.findOne({ servicio: valor });
      if (!servicioExistente) {
        return true;
      }
      // pregunta para validar si estoy editando el mismo servicio
      if(req.params?.id && servicioExistente._id.toString() === req.params.id ){
        return true
      }
      throw new Error("El servicio ya existe en la base de datos");
    }),
  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .isFloat({
      min: 50,
      max: 1000000,
    })
    .withMessage("El precio debe estar entre $50 y $1000000"),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .isString()
    .withMessage("La imagen debe ser una cadena de texto")
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)$/)
    .withMessage(
      "La imagen debe ser una URL válida que termine con .jpg, .jpeg, .png, gif, .webp, bmp o svg"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoría es un dato obligatorio")
    .isString()
    .withMessage("La categoría debe ser una cadena de texto")
    .isIn(["Desarrollo Web", "Backend y API", "Consultoría", "Otros"])
    .withMessage(
      `La categoría debe ser uno de los siguientes valores: 'Desarrollo Web', 'Backend y API', 'Consultoría' u 'Otros'`
    ),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({
      min: 5,
      max: 250,
    })
    .withMessage("La descripcion breve debe tener entre 5 y 250 caracteres")
    .isString()
    .withMessage("La descripcion breve debe ser un texto"),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es un dato obligatorio")
    .isLength({
      min: 10,
      max: 500,
    })
    .withMessage("La descripcion amplia debe tener entre 10 y 500 caracteres")
    .isString()
    .withMessage("La descripcion amplia debe ser un texto"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionServicio;