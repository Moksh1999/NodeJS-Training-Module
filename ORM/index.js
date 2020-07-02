const express=require('express');
const app=express();
const PORT=2000;
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

require('./database/connect');
require('./bootstrap')();