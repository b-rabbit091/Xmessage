const mongoose = require('mongoose')
const schema = mongoose.Schema

const Character_schema = new schema({
    email_sender:String, 
    
    message:String, 

    sent : Date

})
module.exports = mongoose.model('Character',Character_schema)
