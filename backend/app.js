const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

// rotas
const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})