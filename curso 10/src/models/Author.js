import mongoose from "mongoose";

var authorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required : true},
        nationality: {type: String}
    },
    {
        versionKey: false
    }
)

var authors = mongoose.model('author', authorSchema);

export default authors;