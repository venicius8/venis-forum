const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    text: String,
    date: {
        type: String,
        default: new Date().toLocaleString(),
    }
});

const Content = mongoose.model("Content", schema);

module.exports = Content;
