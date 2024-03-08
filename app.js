
const express =require('express')
const app = express()
const port = 3001
const here = require("./controllers/authentication.js")
const mongoDB = require("./db.js")
base =[]

mongoDB.connect.then((message)=>{
console.log(message)
app.listen(port,()=>{
    console.log("Servidor corriendo: ",port)
})
}).catch((error)=>{
    console-log(error)
})
app.use(express.static(__dirname + "/"))
app.use(express.json())
app.get("/register",(req,res)=> {res.sendFile(__dirname + "/html/index/login.html")
})
app.post("/register",here.register)


