const mongoose = require('../db/conn')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        required: true,
        minlength: 10
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User