import mongoose, { mongo } from "mongoose";

try {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.info("BD concetada correctamente"));
} catch (error) {
    console.error(error)
}

export default mongoose;
