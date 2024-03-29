import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if(err instanceof mongoose.Error.CastError.CastError){
    res.status(400).send({message: "Um ou mais dados está incorreto"});
  } else{
    res.status(500).send({message: "Erro interno de servidor."});
  }
}

export default errorHandler;