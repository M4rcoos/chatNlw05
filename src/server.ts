import express from "express";
import "reflect-metadata";

const app = express();

app.get("/", (req, res) => {
  return res.send("Olá NLW O5");
});
app.post("/", (req, res) => {
  return res.json({ message: "Olá NLW O5" });
});

app.listen(3331, () => console.log("servidor rodando!"));
