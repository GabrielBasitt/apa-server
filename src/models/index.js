const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }

)
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
const proConfig = process.env.DATABASE_URL;

 const db = new Pool({
  ssl:{
    rejectUnauthorized: false
  },
    connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig
   
})

//const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('../models/user.model.js')(db.sequelize, db.Sequelize)
db.users.sync()
module.exports = db

//chave estrangeira
//https://sequelize.org/docs/v6/core-concepts/assocs/
// require("dotenv").config()
