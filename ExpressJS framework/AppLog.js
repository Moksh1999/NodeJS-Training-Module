var express=require('express');
var app=express();
var url=require('url');
var fs=require('fs');


let ApplicationLog=(req,res,next)=>{
    let date=new Date();
    let method=req.method;
    let url=req.url;
    let status=req.status;

    var logging=`${date} ${method} ${url} ${status}`;

    fs.appendFile("Log.txt",logging+"\n",err=>{
        if(err)
        {
            console.log(err);
        }
    });
    next();
};

app.use(ApplicationLog);

app.get('/',(req,res)=>{
    res.send("This is a GET req");  
});

app.post('/',(req,res)=>{
    var x=url.parse(req.url,true).query;
    var y=x.firstname;

    let response={
        "firstname" : y
    };
    res.json(response);
});


app.get('/names',(req,res)=>{
    res.send("Moksh1<br>Name 2");
});

app.listen(3003)