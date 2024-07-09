const database = require("../client");

class UsersRepository {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }

  //CRUD
  async ReadAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = UsersRepository;
