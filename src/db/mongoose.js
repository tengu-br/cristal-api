const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/cristal-api"

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})