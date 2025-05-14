const express = require("express");
const path = require("path");
const Content = require("../models/Content");
const Response = require("../models/Response");

const router = express.Router();

function publicRoute(route) {
    return path.join(__dirname, "..", "/public", route);
}

router.get("/", async (req, res) => {
    try {
        const contents = await Content.find();
        const responses = await Response.find();
        res.render(publicRoute("main"), { contents, responses });
    } catch (err) {
        res.status(500).send("Erro ao carregar conteúdo: " + err);
    }
});

router.get("/createpost", (req, res) => {
    res.sendFile(publicRoute("/newPost.html"));
});

router.post("/submitpost", (req, res) => {
    const { title, text, date } = req.body;
    const contents = new Content({ title, text, date });
    contents.save()
        .then(() => res.redirect("/"))
        .catch(err => console.log("Houve um erro: " + err));
});

router.post("/submitresponse", async (req, res) => {
    try {
        const { response, responseId, date } = req.body;
        const subContents = new Response({ response, responseId, date });
        await subContents.save();
        res.redirect(`/content/${responseId}`);
    } catch (err) {
        res.status(500).send("Erro ao enviar resposta: " + err);
    }
});

module.exports = router;
