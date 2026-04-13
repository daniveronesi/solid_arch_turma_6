import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/petshop");
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error(error);
    }
}