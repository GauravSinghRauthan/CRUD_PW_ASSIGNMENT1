const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is must to enter"]
    },
    email:{
        type:String,
        required: [true,"email is must to enter"],
        unique: true
    },
    password:{
        type:String,
        minLength:[8,'password must be aboue 8 char']
    }
})

module.exports = mongoose.model('User',userSchema)