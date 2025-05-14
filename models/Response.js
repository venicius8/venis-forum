const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    response: String,
    responseId: String,
    date: {
        type: String,
        default: new Date().toLocaleString(),
    }
})

const Response = mongoose.model("Response", schema);

module.exports = Response;
