const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({ origin: [process.env.CLIENT_URL, "http://127.0.0.1:5173"] }));

const apiRouter = require("./app/router/api/router");
app.use("/api", apiRouter);

module.exports = app;
