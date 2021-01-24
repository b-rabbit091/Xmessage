const express=require("express");
const app= express();
const route= require('./routes/Section_router');

const handler =require('./handler/handler');



app.use('/',route);
app.use('/submit',handler);
// app.use('/form_section',form_router);
// app.use('/get_info',get_info);

app.set('view engine','ejs');
const port =5000;

app.listen(port,()=>{
    console.log("listening")
})