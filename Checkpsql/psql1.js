const {Client,Pool} = require('pg');
const connectionString = 'postgressql://postgres:1234@localhost:5432/mydb'

const client=new Client({
    connectionString:connectionString
})

client.query('SELECT * from table1',(err,res)=>{
    console.log(err,res);
    client.end();
})