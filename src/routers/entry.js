const express = require('express')
const Entry = require('../models/entry')

const router = new express.Router()

router.post('/entry', async (req, res) => {
    //limpar dados vindo do wordpress
    // const entry = new Entry(req.body)

    const nome = (req.body.outrasInfo.first_name + " " + req.body.outrasInfo.last_name).trim()
    const local = req.body.local
    const entrada = req.body.dataInicio
    const saida = req.body.dataFim

    const ready = {
        nome,
        local,
        entrada,
        saida
    }

    const entry = new Entry(ready)
    try {
        await entry.save()
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.status(201).send({ entry })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/entry', async (req, res) => {
    try {
        const entry = await Entry.find({})
        hue = entry.map(({nome,local,entrada = `-`,saida= `-`}) => {
            return {nome,local,entrada,saida}
        })

        res.send(hue)

    } catch (e) {
        res.status(500).send()
    }
})

router.get('/visitante', async (req, res) => {
    try {
        const entry = await Entry.find({ nome: req.body.nome.trim() })
        res.send(entry)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/visitantes/:nome', async (req, res) => {
    try {
        const entry = await Entry.find({ nome: req.params.nome })
        res.send(entry)

    } catch (e) {
        res.status(500).send()
    }
})

router.get('/estabelecimento', async (req, res) => {
    try {
        const entry = await Entry.find({ local: req.body.local.trim() })
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