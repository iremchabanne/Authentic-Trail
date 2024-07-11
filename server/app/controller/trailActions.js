// Import access to database tables
const tables = require("../../database/tables");

//BREAD

const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const trails = await tables.trail.readAll();
    // Respond with the users in JSON format
    res.json(trails);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const trail = await tables.trail.read(req.params.id);
    if (!trail) {
      res.sendStatus(404);
    } else {
      res.json(trail);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
