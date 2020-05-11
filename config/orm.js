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
    
    //need 
      async insertOne (burgername) {
        const sql = `INSERT INTO burgers ??`
        const [result] = await connection.query(sql, [this.burgername])
        burgername
        this.id = result.insertId
        return this
      }
    
      async updateOne (burgername,eaten) {
        // ensure devoured is a valid Boolean
        this.devoured = fixBool(this.devoured)
        const sql = `UPDATE burgers SET ?? WHERE id = ??`
        burgername,
        eaten
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

