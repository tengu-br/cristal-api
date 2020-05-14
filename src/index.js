const app = require('./app')
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    return res.send({
        msg: 'Default page'
    })
})

app.get('/read', (req, res) => {
    if (!req.query.qr) {
        return res.send({
            error: 'No address was specified'
        })
    }else{
        return res.send({
            msg: `QR code given: ${req.query.qr}`
        })
    }
})

app.get('*', (req, res) => {
    return res.send({
        error: 'Page not found.'
    })
})

app.listen(port, () => { console.log('Server\'s fired up and running!') })