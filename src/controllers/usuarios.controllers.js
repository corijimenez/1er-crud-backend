import Usuario from "../models/usuario.js"
import bcrypt from "bcrypt";

export const crearUsuario = async(req, res)=>{
try {
    // tod: agregar validacion a los datos del usuario
    //hashear el password

    const saltos = bcrypt.genSaltSync(10) //numero de vueltas de encriptacion
    const passwordHasheado = bcrypt.hashSync(req.body.password , saltos)
    req.body.password = passwordHasheado;

    const usuarioNuevo = new Usuario(req.body)
    await usuarioNuevo.save()

    res.status(201).json({mensaje:"Usuario creado correctamente", usuarioNuevo})

} catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrrio un error al crear el usuario"})
}
}

export const listarUsuarios = (req, res)=>{}