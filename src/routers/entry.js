const express = require('express')
const Entry = require('../models/entry')

const router = new express.Router()

router.post('/entry', async (req, res) => {
    const entry = new Entry(req.body)
    try {
        await entry.save()
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