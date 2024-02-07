import mongoose from "mongoose";
mongoose.connect("mongodb+srv://boomber42:123@node-express.lhqvbds.mongodb.net/alura-node");

var db = mongoose.connection;

export default db;