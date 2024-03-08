const mongoose = require("mongoose")

const connect=new Promise(async(resolve,reject)=>{
    let conn= await mongoose.connect("mongodb+srv://Albert0216:Albert0216@cluster0.tzlf4ud.mongodb.net/kod")
     if(conn) resolve("Conexion DB succes")
     reject("Error conexion DB")
})
module.exports={
    connect
}