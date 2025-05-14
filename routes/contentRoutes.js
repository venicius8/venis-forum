const express = require("express");
const Content = require("../models/Content");
const Response = require("../models/Response");
const path = require("path");

const route = express.Router();

route.get("/:id", async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) return res.status(404).send("Conteúdo não encontrado");
        const subContents = await Response.find({ responseId: req.params.id });
        res.render(path.join(__dirname, "..", "public", "content.ejs"), {content, subContents});
    } catch (err) {
        res.status(404).send("Conteúdo não encontrado: " + err);
    }
});

module.exports = route;