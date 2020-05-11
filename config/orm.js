const mysql = require('connection.js')
class ormBurger{
    constructor (burgername, devoured = false)
    {
        this.burgername = burgername
        this.devoured - devoured
    }
    static async selectAll () {
        const [rows] = await connection.query(`SELECT * FROM burgers;`)
        return rows
      }
    
    
      async insertOne () {
        const sql = `INSERT INTO burgers (burgername, devoured) VALUES (?, ?)`
        const [result] = await connection.query(sql, [this.burgername, this.devoured])
        this.id = result.insertId
        return this
      }
    
      async updateOne () {
        // ensure sleepy is a valid Boolean
        this.devoured = fixBool(this.devoured)
        const sql = `UPDATE burgers SET ? WHERE id = ?`
        await connection.query(sql, [
          { burgername: this.burgername, devoured: this.devoured },
          this.id
        ])
        return this
      }
    
    }
    
    function fixBool (prop) {
        if (prop === 'false') prop = false
        else if (prop === '0') prop = false
        else if (prop === 0) prop = false
        else if (prop === null) prop = false
        else if (prop === undefined) prop = false
        else prop = true
        return prop
    
      
    }

module.exports = ormBurger

