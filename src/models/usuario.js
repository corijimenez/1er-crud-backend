//modelo del usuario
import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // agregar validacion de formato de email si es necesario
      /*validate: {
        validator: (valor) => {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
            valor
          );
        },
      }, */
    },
    password: {
      type: String,
      required: true,
      // agregar validacion de formato de password si es necesario
      /*validate: {
        validator: (valor) => {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
            valor
          );
        },
      }, */
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model('usuario', usuarioSchema);
export default Usuario;
