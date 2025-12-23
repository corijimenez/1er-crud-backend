//modelo del servicio
import mongoose, { Schema } from "mongoose";

const servicioSchema = new Schema(
  {
    servicio: {
      type: String,
      minLength: 5,
      maxLength: 100,
      required: true,
      unique: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 50,
      max: 1000000,
    },
    imagen: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
            valor
          );
        },
      },
    },
    categoria: {
      type: String,
      required: true,
      enum: ["Desarrollo Web", "Backend y API", "Consultoría", "Otros"],
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 250,
    },
    descripcion_amplia: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 500,
    },
  },
  {
    timestamps: true,
  }
);

const Servicio = mongoose.model('servicio', servicioSchema);
export default Servicio;
