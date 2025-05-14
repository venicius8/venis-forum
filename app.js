const express = require("express");
const userRoutes = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRoutes);
app.use("/content", contentRoutes);

app.listen(3000, () => console.log("Servidor rodando na URL: http://localhost:3000"));
