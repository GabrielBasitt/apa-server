const db = require('../models')
const Post = db.posts

exports.findAll = async () => {
 try{
    const posts = await Post.findAll({
        attributes:['id','foto','data_Postagem', 'descricao', 'localizacao', 'comentario']
    })
    return posts
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
 }
}

exports.findById = async(id) => {
    try{
        const post = await Post.findByPk(id, {
            attributes:['id','foto','data_Postagem', 'descricao', 'localizacao', 'comentario' ]
        })
        return post
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o Post. ERROR: ' + e.message)
    }
}
exports.create = async(foto, data_Postagem, descricao, localizacao, comentario) => {
    try{
        const post = await Post.create({
            foto: foto, data_Postagem: data_Postagem, descricao: descricao, localizacao: localizacao, comentario: comentario})
        return post
    }catch (e){
        throw Error('Erro ao criar post:  ' + username + ' ERROR:  ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await Post.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar Post. ERROR: ' + e.message)
    }
}