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


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.posts = require('../models/post.model.js')(db.sequelize, db.Sequelize)
db.users = require('../models/user.model.js')(db.sequelize, db.Sequelize)

db.users.sync()
db.posts.sync()
module.exports = db

//chave estrangeira
//https://sequelize.org/docs/v6/core-concepts/assocs/

