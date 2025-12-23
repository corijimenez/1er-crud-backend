import Servicio from "../models/servicio.js";

export const prueba = (req, res) => {
  console.log("consulta de prueba");
  res.send("esto es un ejemplo de prueba desde el backend");
};

export const crearServicio = async (req, res) => {
  try {
    //agregar validacion de datos
    console.log(req)
    console.log(req.body)

    const servicioNuevo = new Servicio(req.body)
    await servicioNuevo.save()
    res.status(201).json({ mensaje: "servicio creado con exito", servicioNuevo });

  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "error interno del servidor al intentar crear unnuevo servicio" });
  }
};
