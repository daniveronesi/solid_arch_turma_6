<<<<<<< HEAD
const User = require("../models/User")
const bcrypt = require("bcrypt")
const createUserToken = require("../helpers/create-user-token")

module.exports = class UserController {

    static async register(req, res) {
        try {
            const { name, email, password, image, phone } = req.body

            if (!name || !email || !password || !phone) {
                return res.status(422).json({ message: "Preencha todos os campos!" })
            }

            const emailNormalized = email.toLowerCase()

            const userExists = await User.findOne({ email: emailNormalized })
            if (userExists) {
                return res.status(422).json({ message: "Email já cadastrado!" })
            }

            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(password, salt)

            const user = new User({
                name,
                email: emailNormalized,
                password: passwordHash,
                image: image || "",
                phone
            })

            await user.save()

            await createUserToken(user, req, res)

        } catch (err) {
            console.error(err)
            res.status(500).json({ message: "Erro no servidor!" })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(422).json({ message: "Informe email e senha!" })
            }

            const emailNormalized = email.toLowerCase()

            const user = await User.findOne({ email: emailNormalized })

            if (!user) {
                return res.status(422).json({ message: "Usuário não encontrado!" })
            }

            const checkPassword = await bcrypt.compare(password, user.password)

            if (!checkPassword) {
                return res.status(422).json({ message: "Senha inválida!" })
            }

            await createUserToken(user, req, res)

        } catch (err) {
            console.error(err)
            res.status(500).json({ message: "Erro no servidor!" })
        }
    }

    static async checkUser(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: "Não autorizado!" })
            }

            res.status(200).json({ user: req.user })

        } catch (err) {
            res.status(500).json({ message: "Erro ao verificar usuário!" })
        }
=======
module.exports = class UserController {
    static async register(req, res) {
        res.json('Olá Get Pet')
>>>>>>> 18a5ebb6c24165b892642a7205fb006bf99deef5
    }
}