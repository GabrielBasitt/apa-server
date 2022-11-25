const db = require('../models')
const Post = db.posts

exports.findAll = async () => {
 try{
    const posts = await Post.findAll({
        attributes:['id','imgURL', 'descricao', 'localizacao', 'usuario']
    })
    return posts
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
   
 }
}

exports.findById = async(id) => {
    try{
        const post = await Post.findByPk(id, {
            attributes:['id','imgURL', 'descricao', 'localizacao' ]
        })
        return post
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o Post. ERROR: ' + e.message)
    }
}
exports.create = async(imgURL, descricao, localizacao, usuario) => {
    try{
        const post = await Post.create({
            imgURL: imgURL, descricao: descricao, localizacao: localizacao, usuario: usuario})
        return post
    }catch (e){
        throw Error('Erro ao criar post:  ' + ' ERROR:  ' + e.message)
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