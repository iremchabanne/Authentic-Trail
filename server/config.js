const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors({ origin: [process.env.CLIENT_URL, "http://127.0.0.1:5173"] }));

const apiRouter = require("./routers/api/router");
app.use("/api", apiRouter);

module.exports = app;
