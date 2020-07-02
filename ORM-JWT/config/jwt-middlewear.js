const jwtconfig = require('./jwt-config');
const JWT = require('jsonwebtoken');

let checkToken = (req,res,next)=>{
    let userToken = req.headers["authorization"];

    if(userToken){
    JWT.verify(userToken,jwtconfig.secret,{
        algorithms : jwtconfig.alogorithm
    },(error,data)=>{
        if(error){
            return res.status(500).json({
                status : 0,
                msg : "Token is not valid"
            })
        }
        else{
            req.user = data;
            next();
        }
    });
}else{
    return res.status(500).json({
        status :0,
        msg : "Please provide authentication token value"
    });
}
}

module.exports = {
    checkToken : checkToken
}