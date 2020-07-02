var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.end("This is first Express App");
});

var server=app.listen(3003,()=>{
    var host=server.address().address
    var port=server.address().port
    console.log("Server host : "+host+"Server Port : "+port);
})

