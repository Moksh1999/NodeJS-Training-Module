var express=require('express');
var app=express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email
    res.send(name+" "+email);
})


app.listen(1000);