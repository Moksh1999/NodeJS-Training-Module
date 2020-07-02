const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=8008;
const qs=require('./query.js');


app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/',(req,res)=>{
    res.json({
        info: "Welcome to GET request",
        status: "App is running successfully"
    })
})

app.get('/users',qs.getAllUsers);
app.get('/users/:id',qs.getByID);
app.post('/users',qs.createUser);
app.patch('/users/:id',qs.updateUser);
app.delete('/users/:id',qs.deleteUser);


app.listen(port,()=>{
    console.log(`Started running on ${port}`);
})