const express=require('express');
app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const env = require('./app/config/env');
const userRoute = require('../API crud/app/routes/crudApp.route');

env.authenticate().then(err=>{
    console.log("Connection established successfully");
}).catch(err=>{
    console.log("Error occured : "+err);
})

env.sync();

/*var corsOptions = {
    origin :"https://localhost:8080"
};
app.use(cors(corsOptions));*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,DELETE,PUT,PATCH");
    next();
  });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
})
);

//require('./app/routes/crudApp.route');

app.use('/',userRoute);

const PORT = process.env.port || 8080;

app.listen(PORT,()=>{
    console.log("App running successfully");
})