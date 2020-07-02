var express=require('express');
var app=express();
var url=require('url');

app.get('/',(req,res)=>{
    res.send("This is a GET req");  
});

app.post('/',(req,res)=>{
    var x=url.parse(req.url,true).query;
    var y=x.firstname;
    var z=req.url;

    let response={
        "firstname" : y
    };
    res.json(response);
});


app.get('/names',(req,res)=>{
    res.send("Moksh1<br>Name 2");
});

app.patch('/',(req,res)=>{
    res.send("PATCH is called");
})

app.delete('/',(req,res)=>{
    res.send("DELETE is called");
})

app.listen(3003)