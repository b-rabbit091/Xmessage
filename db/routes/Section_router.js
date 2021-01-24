
const express = require('express');
var bodyParser=require("body-parser"); 



const Character = require('../model/Character_Schema')

const route= express.Router();
route.use(bodyParser.json()); 
route.use(express.static('public')); 
route.use(bodyParser.urlencoded({ 
	extended: true
})); 

route.get("/",(req,res)=>{
    res.render('home');
})
route.get("/form_section",(req,res)=>{
    res.render('form_section');
})



route.get("/get_info",(req,res)=>
{
	
	res.render("get_info");
})




route.post('/get_mail', async function(req,res){ 
	
	let email_receiver =req.body.InputEmail	; 
	let msg = await Character.find({email_sender:email_receiver}).sort({ sent: 'desc'}).exec();
	res.render("get_mail",{msg:msg});
})


module.exports = route;