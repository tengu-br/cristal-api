const express = require('express')
const Entry = require('../models/entry')

const router = new express.Router()

router.post('/entry', async (req, res) => {
    //limpar dados vindo do wordpress
    // const entry = new Entry(req.body)

    const nome
    const local
    const entrada
    const saida

    const ready = {
        nome,
        local,
        entrada,
        saida
    }

    const entry = new Entry(ready)
    try {
        await entry.save()
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.status(201).send({ entry })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/entry', async (req, res) => {
    try {
        const entry = await Entry.find({})
        res.send(entry)

    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/entry', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndDelete(req.body.id)
        if (!entry) {
            return res.status(404).send()
        }
        res.send(entry)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router