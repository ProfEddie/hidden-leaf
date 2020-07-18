const express = require('express');
const router = express.Router()
const models = require("../models/")


router.get("/hello", (req, res) => {
    res.send("hi")
})

router.get("/hi", async (req,res) => {
    const test = await models.Event.findAll();
    console.log(test)
    res.send("hi")
})


module.exports = router