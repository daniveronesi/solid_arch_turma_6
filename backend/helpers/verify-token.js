const jwt = require('jsonwebtoken')
const getToken = require('./get-token')

const verifyToken = (req, res, next) => {
    const token = getToken(req)

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado!' })
    }

    try {
        const verified = jwt.verify(token, "nossosecret")
        req.user = verified
        next()
    } catch (err) {
        res.status(400).json({ message: 'Token inválido!' })
    }
}

module.exports = verifyToken