var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg',{ useUnifiedTopology: true ,useNewUrlParser: true }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 	
var app=express() 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

const Character = require('../model/Character_Schema')



app.post('/', async function(req,res){ 
	
	var email_sender =req.body.exampleInputEmail1; 
	
	var message = req.body.exampleInputPassword1; 
	console.log(email_sender);
	var data = new Character({ 
		
		"email_sender":email_sender, 
		
		"message":message, 
		"sent":new Date().toLocaleString()
	}) 

	const doc = await data.save() 
		
		console.log(doc)	  
	  

	return res.render('signup_success'); 
}) 


module.exports=app;