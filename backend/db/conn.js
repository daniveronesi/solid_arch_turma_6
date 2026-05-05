const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb+srv://daniveronesi_db_user:dani455@aff.ri7zuny.mongodb.net/pets')

    console.log('Conectado ao MongoDB Atlas 🟢')
}

main().catch((err) => console.log(err))

module.exports = mongoose