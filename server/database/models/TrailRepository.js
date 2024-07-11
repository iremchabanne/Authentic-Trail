const database = require("../client");

class TrailRepository {
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
      `SELECT * FROM ${this.table} WHERE id = ?`[id]
    );
    return rows[0];
  }
}

module.exports = TrailRepository;
