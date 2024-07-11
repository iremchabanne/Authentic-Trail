const express = require("express");

const router = express.Router();

/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const trailsRouter = require("./trails/router");

router.use("/trails", trailsRouter);

module.exports = router;
