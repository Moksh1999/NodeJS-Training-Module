module.exports = async () =>{

    const User = require('./models/users');

    const errHandler = (err)=>{
        console.log("Error : ",err);
    }

    const user = await User.create({
        name : "Moksh" ,
        email : "moksh@example.com"
        }).catch(errHandler);



}