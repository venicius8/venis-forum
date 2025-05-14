const mongoose = require("mongoose");

const uri = "mongodb+srv://<USER>:<PASSWORD>@cluster0.7yq3jkx.mongodb.net/forum?retryWrites=true&w=majority&appName=Cluster0";

function connectDB() {
    mongoose.connect(uri)
        .then(() => console.log("Conectado ao MongoDB."))
        .catch(err => console.log("Aconteceu um erro: " + err));
}

module.exports = connectDB;
