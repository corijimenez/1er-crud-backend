import { validationResult } from "express-validator"

const resultadoValidacion = (req, res, next) => {
    const errores = validationResult(req) // evalua lo que dice validacionServicio
    //si ocurrieron errores hacce tal cosa
    if(errores.isEmpty()){
        //respondemos con el msj de error
       return res.status(400).json(errores.array())
    }
    //continua la ejecucion normal
    next()
}

export default resultadoValidacion;