module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imgURL:{
            type: Sequelize.STRING
        },
        descricao:{
            type: Sequelize.STRING
        },
        comentario: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
    }   

)
    return Post
}