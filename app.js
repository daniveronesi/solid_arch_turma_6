import express from "express";
import { connect } from "./db/conn.js";

const app = express();

app.use(express.json());

connect();

app.get("/", (req, res) => {
    res.send("API rodando 🚀");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get("/users", (req, res) => {
    res.json({ message: "Rota de usuários funcionando 👤" });
});