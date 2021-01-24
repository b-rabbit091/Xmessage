const express= require('express');
const app = express()
const port= 3000;
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/street-fighters'

mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true })




const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})




const Character = require('./model/Character_Schema')

async function runCode() {
  const ryu = new Character({
    'name': 'Ryu',
    'ultimate': 'Shinku Hadoken'
  })

  const doc = await ryu.save()
 //
 
 //console.log(doc)
}

runCode()
  .catch(error => { console.error(error) })



  Character.find({
    'name': 'Ryu'
},function(err,res)
{
  if(err)
  {
    console.log("error")
  }
  else
  {
    console.log(res)
  }

})

app.listen(port,()=>{
    console.log("listening")
});