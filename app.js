require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db.js')
const userRouter = require('./router/userRouter.js')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectToDB()

app.use('/',userRouter)
module.exports = app;