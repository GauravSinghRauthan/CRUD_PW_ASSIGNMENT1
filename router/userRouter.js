const express = require('express')
const {createUser,login }= require('../controller/controller.js')
const router = express.Router()

router.post('/register',createUser)
router.post('/login',login)
module.exports = router
