const mongoose = require('mongoose')

async function main() {
<<<<<<< HEAD
    await mongoose.connect('mongodb+srv://daniveronesi_db_user:dani455@aff.ri7zuny.mongodb.net/pets')

    console.log('Conectado ao MongoDB Atlas 🟢')
}

main().catch((err) => console.log(err))
=======
    await mongoose.connect('mongodb://localhost:27017/getpet')
    console.info('Conectado ao serviço do Mongoose!')
}

main().catch((err) => console.error(err))
>>>>>>> 18a5ebb6c24165b892642a7205fb006bf99deef5

module.exports = mongoose