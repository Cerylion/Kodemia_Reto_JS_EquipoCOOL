const express = require('express')
const router = express.Router()
const userUseCases = require('../utils/userUseCase')
const authMiddlewares = require('../middlewares/auth')
const User = require('../models/usersModels')


router.post('/login', async (req, res) => {
  try{
    const { email, password} = req.body
    const user = await User.findOne({email: email})
    if (!user || !(await User.isValidPassword(password, user.password))) {
      res.status(401).send({message: "password o email no valido"})
    } else {
      const token = await User.createToken({_id: user._id, first_name: user.first_name})
      res.status(201).send({message: "Login exitoso", data: token})
    }


  } catch (error){
      res.status(400).send({message: error})
  }
})

router.post('/signup', async (req, res) => {
    try{
      let user = req.body
      user.password = await User.encryptPassword(user.password)
      const newUser = await User.create(user)
      await newUser.save()
      res.status(201).send({message: "Usuario creado", data: newUser})

    } catch (error){
        res.status(400).send({message: error})
    }
})

router.get('/', async (req, res) => {
  try{
    const users = await User.find()
    res.send({message: "Usuarios:", data : users})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.put('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const user = req.body
    const { id } = req.params
    const updatedUser = await userUseCases.updateUser(id, user)

    res.send({message: "Usuario actualizado",data: updatedUser })

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.delete('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const { id } = req.params
    await userUseCases.deleteUser(id)
    res.send({message: "Usuario eliminado"})

  } catch (error){
      res.status(400).send({message: error})
  }
})

module.exports = router



