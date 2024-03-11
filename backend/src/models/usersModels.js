const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    timestamps: true,
    statics: {
        encryptPassword: async (password) =>{
            const salt = await bcrypt.genSalt(15)
            return await bcrypt.hash(password, salt)
        },
        isValidPassword: async (password, hash) => {
            return await bcrypt.compare(password, hash)
        },
        createToken: async (payload) => {
            
            return jwt.sign(payload, process.env.JWT_SIGN, {expiresIn: '3d'})
        }
    }

}
)

const User = mongoose.model('users',  userSchema) 

module.exports = User