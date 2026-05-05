const mongoose = require('../db/conn')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
<<<<<<< HEAD
        required: true,
        unique: true
=======
        required: true
>>>>>>> 18a5ebb6c24165b892642a7205fb006bf99deef5
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
<<<<<<< HEAD
        default: ""
    },
    phone: {
        type: String,
        required: true,
        minlength: 10
    }
}, {
    timestamps: true
=======
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true // ⚠️ corrigido aqui
>>>>>>> 18a5ebb6c24165b892642a7205fb006bf99deef5
})

const User = mongoose.model('User', userSchema)

module.exports = User