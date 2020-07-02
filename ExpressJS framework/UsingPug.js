var express=require('express');
var app=express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
    app.render('index');
});