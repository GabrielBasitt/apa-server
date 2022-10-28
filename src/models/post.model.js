module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foto:{
            type: Sequelize.STRING,
            notNull: true,
        },
        data_Postagem:{
            type: Sequelize.STRING,
            notNull: true,
            isDate: true
        },
        descricao:{
            type: Sequelize.STRING,
            is:/^[a-zA-Z0-9\._]{4, 32}$/
        },
        localizacao: {
            type: Sequelize.STRING,
            notNull:true,

        },
        comentario: {
            type: Sequelize.STRING,
            notNull:true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/
        }
    },
    {
        timestamps: false,
    }   

)
    return Post
}