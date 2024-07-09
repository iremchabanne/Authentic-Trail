//Allows you to create instances of our class models with different methods in order to interact with the database

const UsersRpository = require("../database/models/UsersRepository");
const TrailRpository = require("../database/models/TrailRepository");

const tables = {};

tables.user = new UsersRpository({ table: "User" });
tables.trail = new TrailRpository({ table: "Trail" });

module.exports = tables;
