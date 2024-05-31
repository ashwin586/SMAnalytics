import express from "express";
import client from "./src/config/database.js";

const app = express();
app.use(express.json());

app.listen(5000, () => console.log("server has started"));
