const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const verifyToken = require('../helpers/verify-token')

// públicas
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// protegida 
router.get('/checkuser', verifyToken, UserController.checkUser)

module.exports = router