import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    // todo: agregar validacion a los datos del usuario
    // hashear el password
    const saltos = bcrypt.genSaltSync(10);
    const passwordHasheado = bcrypt.hashSync(req.body.password, saltos);
    req.body.password = passwordHasheado;

    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "El usuario fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar crear un usuario" });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    if (listaUsuarios.length === 0) {
      return res.status(404).json({ mensaje: "No hay usuarios registrados" });
    }
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los usuarios" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; //req.body.email
    // verificar el email
    const usuarioBuscado = await Usuario.findOne({ email }); // await Usuario.findOne({email: req.body.email})
    // no encontre al usuario buscado
    if (!usuarioBuscado) {
      res.status(401).json({ mensaje: "Credenciales incorrectas - email" });
    }
    // verificar el password
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioBuscado.password,
    );
    if (!passwordValido) {
      return res
        .status(401)
        .json({ mensaje: "Credenciales incorrectas - password" });
    }
    // informar al front que debe loguear al usuario
    const token = generarJWT(usuarioBuscado._id);
    res
      .status(200)
      .json({
        mensaje: "Login exitoso",
        nombre: usuarioBuscado.nombre,
        token,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error loguear el usuario" });
  }
};