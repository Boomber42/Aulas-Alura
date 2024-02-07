import books from "../models/Book.js";
import authors from "../models/Author.js";

class BookController{

    static listBooks = (req, res) => {
        books.find()
            .populate({
                path: 'author', 
                model: authors
            })
            .exec()
            .then(books =>{
                res.status(200).json(books)
            })
            .catch(err =>{
                console.error(err)
            })
    }

    static listBookById = (req, res) => {
        var id = req.params.id;

        books.findById(id)
            .exec()
            .then(book =>{
                res.status(200).json(book)
            })
            .catch(err =>{
                res.status(400).send({message: `${err.message} - Id do livro não encontrado.`})
            })
    }

    static registerBook = (req, res) => {
        var book = new books(req.body);

        book.save()
            .then(book =>{
                res.status(201).send(book.toJSON())
            })
            .catch(err =>{
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`})
            })
    }

    static updateBook = (req, res) => {
        var id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body})
            .exec()
            .then(book =>{
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            })
            .catch(err =>{
                res.status(500).send({message: err.message})
            })
    }

    static deleteBook = (req, res) => {
        var id = req.params.id;

        books.findByIdAndDelete(id)
        .exec()
        .then(book =>{
            res.status(200).send({message: 'Livro removido com sucesso!'})
        })
        .catch(err =>{
            res.status(500).send({message: err.message})
        })
    }

    static listBookByPublisher = (req, res) =>{
        var publisher = req.query.publisher

        books.find({'publisher': publisher})
        .exec()
        .then(book =>{
            res.status(200).send(book)
        })
        .catch(err =>{
            res.status(500).send({message: err.message})
        })
    }
}

export default BookController