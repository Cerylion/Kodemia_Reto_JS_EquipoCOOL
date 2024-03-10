
const mongoose = require ('mongoose')
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.gqtn9gf.mongodb.net/backenddesafio`

const connect = new Promise (async (resolve, reject) => {
    let conn = await mongoose.connect(URI)
    if (conn) resolve('Conexion a Base de Datos realizada')
    reject('Error de conexion a la base de datos')
})

module.exports = {
    connect
}