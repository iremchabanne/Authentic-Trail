// Import the repository modules responsible for handling data operations on the tables

const UserRpository = require("../database/models/UserRepository");
const TrailRepository = require("../database/models/TrailRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

// Register each repository as data access point for its table
tables.user = new UserRpository({ table: "User" });
tables.trail = new TrailRepository({ table: "Trail" });

module.exports = tables;
