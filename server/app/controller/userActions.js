const tables = require("../../database/tables");

//BREAD

const browse = async (req, res, next) => {
  try {
    const users = await tables.trail.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (!user) {
      res.sendStatus(404);
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
