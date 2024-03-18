import express from "express";
import connectInDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./midlewares/errorHandler.js";

var connection = await connectInDatabase();

connection.on("error", console.log.bind(console, "Erro de conexão"));

connection.once("open", () =>{
  console.log("Conexão com o banco realizada com sucesso");
});

var app = express();
app.use(express.json());
routes(app);

app.use(errorHandler);

export default app;