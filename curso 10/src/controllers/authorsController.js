import authors from "../models/Author.js";

class AuthorController{

    static listAuthors = (req, res) => {
        authors.find()
            .exec()
            .then(authors =>{
                res.status(200).json(authors)
            })
            .catch(err =>{
                console.error(err)
            })
    }

    static listAuthorById = (req, res) => {
        var id = req.params.id;

        authors.findById(id)
            .then(authors =>{
                res.status(200).send(authors);
            })
            .catch(err =>{
                res.status(400).send({message: `${err.message} - Id do autor não encontrado.`})
            })
    }

    static registerAuthor = (req, res) => {
        var author = new authors(req.body);

        author.save()
            .then(authors =>{
                res.status(201).send(author.toJSON())
            })
            .catch(err =>{
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor.`})
            })
    }

    static updateAuthor = (req, res) => {
        var id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body})
            .then(authors =>{
                res.status(200).send({message: 'Autor atualizado com sucesso!'})
            })
            .catch(err =>{
                res.status(500).send({message: err.message})
            })
    }

    static deleteAuthor = (req, res) => {
        var id = req.params.id;

        authors.findByIdAndDelete(id)
            .then(authors =>{
                res.status(200).send({message: 'Autor removido com sucesso!'})
            })
            .catch(err =>{
                res.status(500).send({message: err.message})
            })
    }
}

export default AuthorController