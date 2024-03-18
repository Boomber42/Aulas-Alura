import { authors } from "../models/Author.js";

class AuthorController{

  static async listAuthors (req, res, next) {
    try {
      var listAuthors = await authors.find({});
      res.status(200).json(listAuthors);
    }
    catch(err) {
      next(err);
    }
  }

  static async listAuthorById (req, res, next) {
    try {
      var id = req.params.id;
      var authorFound = await authors.findById(id);

      if(authorFound !== null){
        res.status(200).json(authorFound);
      } else {
        res.status(404).send({message: "Id do autor não encontrado."});
      }
    }
    catch(err) {
      next(err);
    }
  }

  static async registerAuthor (req, res, next) {
    try {
      var newAuthor = await authors.create(req.body);
      res.status(201).json({ message: "criado com sucesso", book: newAuthor });
    }
    catch(err){
      next(err);
    }
  }

  static async updateAuthor (req, res, next) {
    try{
      var id = req.params.id;
      await authors.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send(authors, {message: "Autor atualizado com sucesso!"});
    }
    catch(err){
      next(err);
    }
  }

  static async deleteAuthor (req, res, next) {
    try{
      var id = req.params.id;
      await authors.findByIdAndDelete(id);
      res.status(200).send(authors, {message: "Autor removido com sucesso!"});
    }
    catch(err){
      next(err);
    }
  }
}

export default AuthorController;