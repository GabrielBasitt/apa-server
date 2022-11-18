module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imgURL:{
            type: Sequelize.STRING(1000)
        },
        descricao:{
            type: Sequelize.STRING
        },
        localizacao: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
    }   

)
    return Post
}