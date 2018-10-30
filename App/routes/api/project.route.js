var express = require('express')

var router = express.Router()
var Project=require('../../models/project.model')
// Getting the Todo Controller that we just created

var ProjectController = require('../../controllers/project.controller');


// Map each API to the Controller FUnctions

router.get('/', ProjectController.getProjects)

router.post('/', ProjectController.createProject)

router.put('/', ProjectController.updateProject)

router.route('/:id')
.get((req,res)=>{
    Project.findById(req.params.id   ,(err,project)=>{
        if(err) res.send(err);
        res.json(project);
    })
})
.delete((req,res)=>{
    Project.deleteOne({_id:req.params.id},(err,project)=>{
        if(err)
        res.send(err);
        res.json({message:'DELETED'});
    })
})

// Export the Router

module.exports = router;