//const { request } = require('express')
//const { users } = require('../models')
const userService = require('../services/user.service')

exports.findAll = async (request, response) =>{
    try{
        const users = await userService.findAll()
            return response.status(200).json({
                status: 200,
                data: users,
                message: 'Usuarios listados com sucesso'
            })
    }catch (e){
        response.send(400).json({
            status:400,
            message: e
        })
    }
}
exports.findById = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const user = await userService.findById(id)
        response.status(200).json({
            status: 200,
            data: user,
            message: 'Usuario selecionado com sucesso'
        })
    } catch (e){
        response.sed(400).json({
            status:400,
            message: e
        })
    }
}
exports.create = async (request, response) => {
    try{
        const { username,name, email, password } = request.body
        const user = await userService.create(username, name, email, password)
        response.status(201).send({
            message: "Usuario cadastrado com sucesso!",
            body:{
                user: user
            }
        })
    }catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o usuario. Error: " + e.message
        })
    }
}
exports.update = async(request, response) =>{
    try{
        const id = parseInt(request.params.id)
        const {username, name, email, password} = request.body

        await userService.update(id, username, name, email, password)
        response.status(200).send({
            message: "usuario alterado com sucesso",
            body:{
                status: 200,
                username: username,
                name: name,
                email: email
            }
    })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
exports.delete = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        if (id == 0) throw Error('ID não informado')
        await userService.delete(id)
        response.status(200).send({
            status: 200,
            message: "Usuario deletado!"
        })
    } catch(e){
            return response.status(400).json({
                status: 400,
                message: e.message
            })
    }
}
exports.login = async(request, response) => {
try{
   
    const {email, password } = request.body
    const users = await userService.login(email, password)
    if(users == null){
        response.status(400).send("Usuário não encontrado");
    }else{
        response.status(200).json({
            message: "Login efetuado!",
            status: 200,
            data: users
        })
    }
    console.log(users);
} catch (e){
    return response.status(400).send({
        status: 400,
        message: "Erro ao efetuar o login. Error: " + e.message

    })
}
}
// const getPessoa = (request, response) => {
//   const { email, senha } = request.body
//   db.query(
//     'SELECT * FROM pessoa WHERE email = $1 ORDER BY nome_completo',
//     [email],
//         (error, results) => {
//           if (error) {
//             console.log("error" + error);
//             response.status(400).send({
//               status: 400,
//               message: "error ao procurar o usuário" + error,
//             });
//             } else {
//             if(results.rows.length === 0) {
//               response.status(400).send("Usuário não encontrado");
//               } else {
//               if (results.rows[0].senha === senha) {
//                 response.status(200).json(results.rows);
//                 console.log(request.body);
//                 } else {
//                 response.status(400).send('Senha incorreta')
//                 }
//               }
//             }
//           }
//         )
//       };