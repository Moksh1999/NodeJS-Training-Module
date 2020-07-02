const task = require('../controllers/crudApp.controller');
var router = require('express').Router();

    router.post('/create',task.createUser);

    router.get('/user/:id',task.findByID);

    router.get('/all/users',task.getAll);

   router.get('/getbyName/:name',task.getByName);//

   router.delete('/delete/:id',task.deleteByID);

    router.patch('/update/:id',task.update);

    module.exports=router;
    