module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "mercado123",
    DB: "apa_server_localhost",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

//password mudar para a senha do seu postgres e depois mudar no heroku