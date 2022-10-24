require("dotenv").config()
const express = require('express')
const cors = require('cors')
const Pool = require('pg').Pool
const app = express()


const index = require('./routers/index')
const userRouters = require('./routers/user.routers')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', userRouters)

module.exports = app

  //const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
//  const proConfig = process.env.DATABASE_URL;

//   const db = new Pool({
//   ssl:{
//     rejectUnauthorized: false
//  },
//    connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig
//     })