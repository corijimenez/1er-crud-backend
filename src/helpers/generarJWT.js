import jwt from "jsonwebtoken";

const generarJWT = (id) =>{ //datos que quiero guardar en el token, pero no info sensible como password
    try {
        const payload = {id}
        const token = jwt.sign(payload, process.env.SECRETJWT, {expiresIn: "2h"}) // firma del token
        return token
    } catch (error) {
        console.error(error)
        throw new Error("Error al generar el token")
    }
};

export default generarJWT;