const { v4 } = require('uuid');
const express = require('express');
const router = express.Router()
const model = require('../models')
const { QueryTypes } = require('sequelize');
const {sequelize} = require('../models')

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
    const t = await sequelize.transaction();
    try {
       const {Group_name ,data} = req.body;
       let leaderId;
       console.log(data)
       for (let i = 0 ; i < data.length ; i++) {
           let cell = {
               full_name: data[i].Fullname,
               group_name: Group_name,
               university: data[i].University, 
               birthdate: data[i].Birthdate,
               student_card: data[i].Student_card,
               email: data[i].Email,
               phone_number: data[i].Phone_number,
               gender: data[i].Gender,
               facebook: data[i].Facebook,
               is_leader: data[i].isLeader,
           }
           const candidate = await model.Candidate.create(cell, {transaction: t})
           if (data[i].isLeader) {
               leaderId = candidate.dataValues.id
            }
        }
        console.log(leaderId)
        await model.Group.create({
            group_name: Group_name,
            event_id: 1,
            leader_id: leaderId
        }, {transaction: t})
        await t.commit();
        res.status(200).json('success');
    }
    catch(err) {
        await t.rollback();
        console.log(err.message)
        console.log(err.errors[0].message);
        res.status(400).json(err.errors[0].message);
    }
})

router.route('/member')
.post(async(req, res) => {
    const t = await sequelize.transaction();
    try {
        const {data} = req.body;
       console.log(data)
       let form_id = v4();
       for (let i = 0 ; i < data.length ; i++) {
           if (data[i].Fullname) {
                let cell = {
                  full_name: data[i].Fullname,
                  form_id,
                  university: data[i].University, 
                  birthdate: data[i].Birthdate,
                  student_card: data[i].Student_card,
                  email: data[i].Email,
                  phone_number: data[i].Phone_number,
                  gender: data[i].Gender,
                  facebook: data[i].Facebook,
                  is_leader: null
                }
              await model.Candidate.create(cell, {transaction: t})
           }
        }
        await t.commit();
        res.status(200).json('success');
    }
    catch(err) {
        await t.rollback();
        console.log(err.errors[0].message);
        res.status(400).json(err.errors[0].message);
    }
})

module.exports = router