const app = require('./app.js')

let PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`sever ready on ${PORT}`)
})