const express=require('express');
const bodyParser=require('body-parser');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const { json } = require('body-parser');
const jwtconfig = require('./config/jwt-config');
const { secret } = require('./config/jwt-config');
const jwtmidd = require('./config/jwt-middlewear');

const app=express();

const PORT = 8000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}));

const sequelize = new Sequelize("orm_jwt","postgres","1234",{
    host : "localhost",
    dialect : "postgres"
})

sequelize.authenticate().then(data=>{
    console.log("Database connected successfully");
}).catch(err=>{
    console.log("An error occured");
})

//define model

var User=sequelize.define("users",{
    id : {
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
        type : Sequelize.INTEGER
    },
    name : {
        allowNull : false,
        type : Sequelize.STRING
    },
    email : {
        allowNull : false,
        type : Sequelize.STRING
    },
    password : {
        allowNull : false,
        type : Sequelize.STRING
    },
    status : {
        type : Sequelize.INTEGER,
        defaultValue : 1
    }
},
    {
        timestamps : false,
        modelName : "User"
    });

User.sync();

//API usign hash

app.post('/user',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password,10);
    let status = req.body.status;

    User.findOne({
        where : {
            name : name
        }
    }).then(user=>{
        if(user){
            res.status(200).json({
                status : 0,
                msg : "User already exists"
            })
        }
        else{
            
    User.create({
        name : name,
        email : email,
        password : password,
        status : status
    }).then((response)=>{
        res.status(201).json({
            status :1,
            msg : "User registered successfully"
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })

        }
    })

});


//jwt middlewear
app.post('/profile',jwtmidd.checkToken,(req,res)=>{
    res.status(200).json({
        status : 1,
        data : req.user,
        msg : "Token value parsed"
    })
})

//login api
app.post('/login',(req,res)=>{
    User.findOne({
        where : {
            email : req.body.email
        }
    }).then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){

                let jwttoken = JWT.sign({
                    email : req.body.email,
                    password : req.body.password
                },jwtconfig.secret,{
                    expiresIn : jwtconfig.expiresIn,
                    notBefore : jwtconfig.notBefore,
                    audience : jwtconfig.audience,
                    issuer : jwtconfig.issuer,
                    algorithm : jwtconfig.alogorithm[0]
                });

                res.status(200).json({
                    status : 1,
                    msg : "Logged in successfully",
                    token : jwttoken
                })
            }
            else{
                res.status(200).json({
                    status : 0,
                    msg : "Invalid password"
                })
            }
        }
        else{   
            res.status(500).json({
                status : 0,
                msg : "User doesn't exist"
            })
        }
    })
})

//validate req
app.post('/validate',(req,res)=>{
    let userToken = req.headers["authorization"];

    if(userToken){
        JWT.verify(userToken,jwtconfig.secret,(err,decoded)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(decoded);
            }
        })
    }
    else{
        res.status(500).send({
            status : 0,
            msg : "Please provide authorisation value"
        })
    }
})

//Default Req
app.get('/',(req,res)=>{
    res.status(200).json({
        status : 1,
        msg : "Welcome to home page"
    });
});


app.listen(PORT,()=>{
    console.log("Application is running");
});