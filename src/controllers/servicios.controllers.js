import Servicio from "../models/servicio.js";

export const prueba = (req, res) => {
  console.log("consulta de prueba");
  res.send("esto es un ejemplo de prueba desde el backend");
};

export const crearServicio = async (req, res) => {
  try {
    //agregar validacion de datos
    console.log(req);
    console.log(req.body);

    const servicioNuevo = new Servicio(req.body);
    await servicioNuevo.save();
    res
      .status(201)
      .json({ mensaje: "servicio creado con exito", servicioNuevo });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error interno del servidor al intentar crear unnuevo servicio",
    });
  }
};

export const listarServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.status(200).json(servicios);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error interno del servidor al intentar listar los servicios",
    });
  }
};

export const obtenerServicioId = async (req, res) => {
  try {
    console.log(req.params.id);
    const servicioBuscado = await Servicio.findById(req.params.id);
    if (!servicioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "no se encontro el servicio con ese id" });
    }
    res.status(200).json(servicioBuscado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje:
        "error interno del servidor al intentar buscar el servicio por id",
    });
  }
};

export const editarServicio = async (req, res) => {
  try {
    console.log(req.params.id);
    const servicioBuscado = await Servicio.findById(req.params.id)
    if (!servicioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "no se encontro el servicio con ese id" });
    }
    //aqui se editara el servicio
    await Servicio.updateOne({_id: req.params.id}, req.body)
    res.status(200).json({mensaje: "servicio editado correctamente"})
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje:
        "error interno del servidor al intentar buscar el servicio por id",
    });
  }
};


export const borrarServicio = async (req, res) => {
  try {
    console.log(req.params.id);
    const servicioBuscado = await Servicio.findByIdAndDelete(req.params.id)
    if (!servicioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "no se encontro el servicio con ese id" });
    }
    //aqui se borrara el servicio
    console.log("Servicio eliminado:", servicioBuscado);
    res.status(200).json({mensaje: "servicio eliminado correctamente"})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje:
        "error interno del servidor al intentar buscar el servicio por id",
    });
  }
};
