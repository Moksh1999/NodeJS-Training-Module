const Pool=require('pg').Pool;

const pool=new Pool({
    user : 'me',
    host : 'localhost',
    database : 'crudapi',
    password : 'demo123',
    port : 5432,
})


const getAllUsers = (req,res)=>{
    pool.query('select * from users order by id asc',(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

const getByID = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query('select * from users where id=$1',[id],(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

const createUser = (req,res) =>{
    const {name,email} = req.body;
    pool.query('insert into users (name,email) values ($1,$2)',[name,email],(err,result)=>{
        if(err){
            throw err;
        }
        res.status(201).send(`User added with ID: ${result.insertId}`)  
        })
}


const updateUser = (req,res) =>{
    const id = parseInt(req.params.id);
    const {name,email} = req.body;

    pool.query('update users set name=$1,email=$2 where id=$3',[name,email,id],(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json({
            message : `User updated with id=${id}`
        })
    })
}


const deleteUser = (req,res) =>{
    const id = parseInt(req.params.id);

    pool.query('delete from users where id=$1',[id],(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json({
            messgage : `User deleted with id=${id}`
        })
    })
}


module.exports={
 getAllUsers,
 getByID,
 createUser,
 updateUser,
 deleteUser
}
