import mongoose from "mongoose";

var bookSchame = new mongoose.Schema({
  id: {type: String},
  title: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "authors", required: true},
  publisher: {type: String, required: true},
  pages: {type: Number},
},
{
  versionKey: false
});

var books = mongoose.model("books", bookSchame);

export default books;