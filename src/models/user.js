const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true

    }
}, {
    timestamps: true
})


//Methods for single instance
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    return userObject
}

const User = mongoose.model('User', userSchema)

module.exports = User