const User = require('../models/usersModels')

async function validUserId(req, res, next) {
    const { userid } = req.headers

    const user = await User.findById(userid)


    if (!user) {
        res.status(401).send({message: "Usuario no autorizado"})
    }else {
        req.user = user
        next()
    }
}
module.exports = {
    validUserId
}