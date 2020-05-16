const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true

    },
    local: {
        type: String,
        required: true,
        trim: true

    },
    entrada: {
        type: Date,
        required: false,
        trim: true

    },
    saida: {
        type: Date,
        required: false,
        trim: true

    },
}, {
    timestamps: false
})


//Methods for single instance
entrySchema.methods.toJSON = function () {
    const entry = this
    const entryObject = entry.toObject()
    return entryObject
}

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry