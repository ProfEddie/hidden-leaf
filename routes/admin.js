const express = require('express');
const router = express.Router()
const model = require('../models')


router.route('/')
.post(async(req, res) => {
    try {
        // console.log(req.body)
        const {username, password} = req.body
        var result = await model.Admins.findOne({ where: { username: username, password: password} });
        if (result) {
            console.log('trigger')


            res.status(200).end('authenticated')
        }
        else {
           console.log('trigger')

            res.status(400).json('username or password not found');
        }
    }
    catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
})

module.exports = router