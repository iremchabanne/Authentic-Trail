const database = require("../client");

class UserRepository {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }

  //CRUD
  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }
}

module.exports = UserRepository;
