import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Servicio from "../models/servicio.js";

const validacionServicio = [
  body("servicio")
    .notEmpty()
    .withMessage("El servicio es un dato obligatorio")
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage("El servicio debe tener entre 3 y 100 caracteres")
    .isString()
    .withMessage("El servicio debe ser una cadena de texto")
    .custom(async (valor, { req }) => {
      //todo: verificar que el nombre del servicio no exista en la base de datos
      // valor representa el nombre del servicio que se esta intentando crear
      const servicioExistente = await Servicio.findOne({ servicio: valor });
      if (!servicioExistente) {
        return true; // El servicio no existe, la validación pasa
      }
      if (req.params?.id && servicioExistente._id.toString()=== req.params.id) {
        // el signo de pregunta es para verificar si id existe en los parametros
        return true;
      }
        throw new Error("El nombre del servicio ya existe en la base de datos");
    }),
  body("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un nro")
    .isFloat({
      min: 50,
      max: 1000000,
    })
    .withMessage("El precio debe estar entre 50 y 1000000"),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .isString()
    .withMessage("La imagen debe ser una cadena de texto")
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
    )
    .withMessage(
      "La imagen debe ser una URL válida que termine en .jpg, .jpeg, .png o .webp",
    ),

  body("categoria")
    .notEmpty()
    .withMessage("la categoria es un dato obligatorio")
    .isString()
    .withMessage("la categoria debe ser una cadena de texto")
    .isIn(["Desarrollo Web", "Backend y API", "Consultoría", "Otros"])
    .withMessage(
      "La categoria deberia ser uno de los siguientes valores: Desarrollo Web, Backend y API, Consultoría, Otros",
    ),
  body("descripcion")
    .notEmpty()
    .withMessage("la descripcion es un dato obligatorio")
    .isString()
    .withMessage("la descripcion debe ser una cadena de texto")
    .isLength({ min: 5, max: 250 })
    .withMessage("la descripcion debe tener entre 5 y 250 caracteres"),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("la descripcion_amplia es un dato obligatorio")
    .isString()
    .withMessage("la descripcion_amplia debe ser una cadena de texto")
    .isLength({ min: 10, max: 500 })
    .withMessage("la descripcion_amplia debe tener entre 10 y 500 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionServicio;
