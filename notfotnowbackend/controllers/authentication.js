const express = require("express")
const bcryptjs = require("bcryptjs")
const router = express.Router()

const usuarios =[{
    user: "a",
    email:"a@a.com",
    password:"a"
}]



async function register(req,res){
    console.log(req.body)
    const user =req.body.user
    const password =req.body.password
    const email =req.body.email
    if(!user || !password || !email){
       return res.status(400).send({status:"error"})
    }
    const usuarioARevisar = usuarios.find(usuario=>usuario.user ===user)
    if(usuarioARevisar){
        return res.status(400).send({status:"ya existe"})
    }
    const salt=await bcryptjs.genSalt(5)
    const hash=await bcryptjs.hash(password,salt)
    const nuevoUsuario={
        user,email,password:hash
    }
    console.log(nuevoUsuario)
    usuarios.push(nuevoUsuario)
   return res.status(201).send({status:"ok",message:"Usuario"+nuevoUsuario+"agregado",redirect:"/"})
}
module.exports={register}
