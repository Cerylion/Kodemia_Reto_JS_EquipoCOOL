require('dotenv').config()
const express = require('express')
const app = express()
const userRoutes = require('./src/routes/users')

const mongoDB = require('./src/db/db')
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "REDO CRUD desafio backend"})
})

app.use('/users', userRoutes)
// app.use('/message', messageRoutes)

mongoDB.connect.then((message) =>{
    console.log(message)
    app.listen(port, () =>{
        console.log("Servidor listo en el puerto: " + port)
    })
})