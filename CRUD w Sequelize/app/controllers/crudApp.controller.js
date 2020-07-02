const sequelize = require('sequelize');
const User  = require('../models/crudApp.model');
const { json } = require('sequelize');

exports.createUser = (req,res)=>{
    if(!req.body.name)
    {
        res.send(json({
            msg : "Username is Mandatory"
        }))
    }

    const user = {
        name : req.body.name,
        email : req.body.email,
        age : req.body.age
    }

    User.create(user)
    .then(data=>{
        res.status(201).send(json({
          data : data
        }));
    })
    .catch(err=>{
        res.status(400).send(err);

    })
}


exports.findByID = (req,res) => {
    const id = req.params.id

    User.findByPk(id)
    .then(data=>{
        res.status(200).send(json({
          data : data
        }));
    })
    .catch(err=>{
        res.send(err);
    })
};


exports.deleteByID  = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    }).then(data=>{
        res.status(200).send(json({
          data : data
        }))
    }).catch(err=>{
        res.send(err)
    })
  };

  exports.getByName = (req,res)=>{
        const name = req.params.name;

        User.findAll({
          where : {name : name}
        })
        .then(data=>{
            res.status(200).send(json({
                 data : data
            }));
        })
        .catch(err=>{
            res.send(err);
        })
  };


  exports.getAll = (req,res)=>{
      User.findAll().then(function(users){
          res.status(200).json({
              status : 1,
              meesage : "Users",
              data : users
          });
      }).catch(function(error){
            console.log(error);
      });
  }
   