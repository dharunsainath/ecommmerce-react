const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: 'config/config.env'})

console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`port is running ${process.env.PORT}`)
})