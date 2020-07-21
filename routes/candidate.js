const express = require('express');
const router = express.Router()
const model = require('../models')


router.route('/')
.get( async (req, res) => {
    try {
        let result = await model.Candidate.findAll();
        res.status(200).json(result)
    }
    catch(err) {
        res.status(400).json(err);
    }
}) 
.post(async(req, res) => {
    try {
        req.body.forEach( async (item) => {
            await model.Candidate.create(item)
        })
        res.status(200).end('inserted')
    }
    catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router