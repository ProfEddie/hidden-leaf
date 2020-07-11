const express = require('express');
const router = express.Router()
const googleSpreadSheet = require('google-spreadsheet')
const {promisify} = require('util')
const creds = require('../MyProject-eda84eaa3467.json')

router.get("/hello", (req, res) => {
    res.send("hi")
})

router.post('/add-sheet-data', async (req, res) => {
    const doc = new googleSpreadSheet('1cm6SX14gc9EYURjraITh5_WdSfxzEMmZz_c2030fnys')
    await promisify(doc.useServiceAccountAuth)(creds)
})

module.exports = router