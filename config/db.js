const mongoose = require('mongoose')

const connectToDB = async ()=>{
    mongoose
    .connect(process.env.MONGOOSE_URL)
    .then((conn)=>{
        console.log(`server connected to ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports = connectToDB