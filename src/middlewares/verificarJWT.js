import jwt from "jsonwebtoken";
const verificarJWT = (req, res, next) => {
    try {
        //verificar que el token venga en los headers
        const authHeader = req.headers("authorization") 
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({mensaje: "No hay token, permiso no vlaido"})
        }
        console.log(authHeader)
        //separamos la palabra Bearer del token
        const token = authHeader.split(" ")[1]

        if(!token){
            return res.status(401).json({mensaje: "No hay token en la peticion"})
        }
        const payload = jwt.verify(token, process.env.SECRETJWT)
        // puedo extraer info del payload si es necesario
        req.idUsuario = payload.id; // ejemplo de agregar una propiedad al req 
        next()
    } catch(error) {
        console.error(error)
        console.error("Error en JWT:", error.name);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ 
        mensaje: "Tu sesión ha expirado, por favor vuelve a iniciar sesión." 
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ 
        mensaje: "Token inválido o malformado." 
      });
    }

    res.status(401).json({ 
      mensaje: "No se pudo autenticar el token." 
    });
  }
};

export default verificarJWT;
