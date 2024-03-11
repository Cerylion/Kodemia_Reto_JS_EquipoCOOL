const User = require('../models/usersModels')
const jwt = require('jsonwebtoken')

async function validUserId(req, res, next) {




    try{
        const { authorization } = req.headers
        const token = authorization.split(' ')[1]
        let decode = jwt.verify(token, process.env.JWT_SIGN)
        let date = new Date()
        if(decode.exp > date.getTime()) {
            res.status(401).send({message: "La sesion expiro"})
        }
        req.user = decode
        next()
    } catch (error) {
        res.status(401).send({message: "Debes hacer login primero"})
    }

}
module.exports = {
    validUserId
}