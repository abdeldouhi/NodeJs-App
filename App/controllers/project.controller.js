
var ProjectService = require('../services/project.service')


_this = this



exports.getProjects = async function(req, res, next){

    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var Projects = await ProjectService.getProjects({}, page, limit)
        
        
        return res.status(200).json({status: 200, data: Projects, message: "Succesfully Projects Recieved"});
        
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createProject = async function(req, res, next){


    var project = {
        name:req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        customer: req.body.customer,
        employees: req.body.employees,
        ammount: req.body.ammount,
        status: req.body.status

    }

    try{
        
    
        var createdProject = await ProjectService.createProject(project)
        return res.status(201).json({status: 201, data: createdProject, message: "Succesfully Created Project"})
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: "Project Creation was Unsuccesfull"})
    }
}

exports.updateProject = async function(req, res, next){


    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var project = {
        id,
        name:req.body.name ? req.body.name : null,
        description: req.body.description ? req.body.description : null,
        startDate: req.body.startDate ? req.body.startDate : null,
        endDate: req.body.endDate ? req.body.endDate : null,
        customer: req.body.customer ? req.body.customer : null,
        employees: req.body.employees ? req.body.employees : null,
        ammount: req.body.ammount ? req.body.ammount : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedProject = await ProjectService.updateProject(project)
        return res.status(200).json({status: 200, data: updatedProject, message: "Succesfully Updated Project"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeProject= async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await ProjectService.deleteProject(id)
        return res.status(204).json({status:204,data:deleted, message: "Succesfully Project Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}