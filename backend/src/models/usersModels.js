const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        match: [/^[A-Za-z]+$/, 'Algun caracter no es valido'],
    },
    last_name: {
        type: String,
        match: [/^[A-Za-z]+$/, 'Algun caracter no es valido'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Ingresa un email valido']
    },
    password: {
        type: String,
        required: true
    },

},
{
    timestamp: true
}
)

const User = mongoose.model('users',  userSchema) 

module.exports = User