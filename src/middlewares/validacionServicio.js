import {body} from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validacionServicio = [
    body("servicio").notEmpty().withMessage('El servicio es un dato obligatorio').isLength({
        min: 3,
        max: 100,
    }).withMessage('El servicio debe tener entre 3 y 100 caracteres').isString().withMessage('El servicio debe ser una cadena de texto').custom(()=> {
        //todo: verificar que el nombre del servicio no exista en la base de datos
    }), 
(req, res, next)=> resultadoValidacion(req, res, next)];

export default validacionServicio;