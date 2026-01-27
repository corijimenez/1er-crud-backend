import generarJWT from "../helpers/generarJWT.js";
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

export const listarUsuarios = async (req, res)=>{
try {
    const listadoUsuarios = await Usuario.find() //encontrar todos
    if(listadoUsuarios.length===0){
        return res.status(404).json({mensaje: "No hay usaurios registrados"})   
    }    
    res.status(200).json(listadoUsuarios);

} catch (error) {
    console.error(error)
    res.status(500).json({mensaje: "ocurrio un error al listar los usuarios"})
}
}

export const login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        //verificar el email
        const usuarioBuscado = await Usuario.findOne({email:req.body.email})//encontrar uno solo, tmb se puede escribir -> await Usuario.findOne({email})
        if(!usuarioBuscado){
            return res.status(404).json({mensaje: "No se encontro el usuario"})
        }
        //verificar el password
        const passwordValido = bcrypt.compareSync(password, usuarioBuscado.password)
        if(!passwordValido){
            return res.status(401).json({mensaje: "credenciales incorrectas"})
        }
        //informar al front que debe logear al usuario
        const token = generarJWT(usuarioBuscado._id)
        res.status(200).json({mensaje: "Login exitoso", nombre : usuarioBuscado.nombre, token})

    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "ocurrio un error al intentar iniciar sesion"})
    }
}