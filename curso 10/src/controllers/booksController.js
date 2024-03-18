import books from "../models/Book.js";
import { authors } from "../models/Author.js";

class BookController{

  static async listBooks (req, res, next) {
    try {
      var listBooks = await books.find({}).populate({ path: "author", model: authors}).exec();
      res.status(200).json(listBooks);
    }
    catch(err){
      next(err);
    }
  }

  static async listBookById (req, res, next) {
    try {
      var id = req.params.id;
      var bookFound = await books.findById(id).populate({path: "author", model: authors}).exec();
      res.status(200).json(bookFound);
    }
    catch(err){
      next(err);
    }
  }

  static async registerBook (req, res, next) {
    var newBook = req.body;
    try {
      var authorFound = await authors.findById(newBook.author);
      var completeBook = { ...newBook, author: { ...authorFound._doc}};
      var bookCreated = await books.create(completeBook);
      res.status(201).json({ message: "Cadastrado com sucesso", books: bookCreated});
    }
    catch(err){
      next(err);
    }
  }

  static async updateBook (req, res, next) {
    try {
      var id = req.params.id;
      await books.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).json({message: "Livro atualizado com sucesso!"});
    }
    catch(err) {
      next(err);
    }
  }

  static async deleteBook (req, res, next) {
    try {
      var id = req.params.id;
      await books.findByIdAndDelete(id);
      res.status(200).json({message: "Livro removido com sucesso!"});
    }
    catch(err){
      next(err);
    }
  }

  static async listBookByPublisher (req, res, next) {
    var publisher = req.query.publisher;
    try {
      var booksByPublisher = await books.find({"publisher": publisher});
      res.status(200).json(booksByPublisher);
    }
    catch(err){
      next(err);
    }
  }
}

export default BookController;