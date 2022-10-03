module.exports = {
    HOST: process.env.PG_HOST,
    USER: process.env.PG_USER,
    PASSWORD: process.env.PG_PASSWORD,
    DB: process.env.DATABASE_URL,
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

//password mudar para a senha do seu postgres e depois mudar no herok
 //require("dotenv").config()

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
// const proConfig = process.env.DATABASE_URL;

//  const db = new Pool({
//   ssl:{
//     rejectUnauthorized: false
//   },
//     connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig
   
// })