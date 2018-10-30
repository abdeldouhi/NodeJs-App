// Accessing the Service that we just created

var EmployeeService = require('../services/employee.service')


_this = this



exports.getEmployees = async function(req, res, next){

    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var employees = await EmployeeService.getEmployees({}, page, limit)
        
        
        return res.status(200).json({status: 200, data: employees, message: "Succesfully Employees Recieved"});
        
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createEmployee = async function(req, res, next){


    var employee = {
        name:req.body.name,
    firstName:req.body.firstName,
    username:req.body.username,
    birthDate:req.body.birthDate,
    address:req.body.address,
    phone:req.body.phone,
    email:req.body.email,
    position:req.body.position,
    project:req.body.project

    }

    try{
        
    
        var createdEmployee = await EmployeeService.createEmployee(employee)
        return res.status(201).json({status: 201, data: createdEmployee, message: "Succesfully Created Employee"})
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: "Employee Creation was Unsuccesfull"})
    }
}

exports.updateEmployee = async function(req, res, next){


    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var employee = {
        id,
        name:req.body.name ?req.body.name:null,
    firstName:req.body.firstName ? req.body.firstName : null,
    username:req.body.username ? req.body.username : null,
    birthDate:req.body.birthDate ? req.body.birthDate : null,
    address:req.body.address ? req.body.address : null,
    phone:req.body.phone ? req.body.phone : null,
    email:req.body.email ? req.body.email : null,
    position:req.body.position ? req.body.email : null,
    project:req.body.project ? req.body.project : null
    }

    try{
        var updatedEmployee = await EmployeeService.updateEmployee(employee)
        return res.status(200).json({status: 200, data: updatedEmployee, message: "Succesfully Updated Employee"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeEmployee = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await EmployeeService.deleteEmployee(id)
        return res.status(204).json({status:204, data:deleted,message: "Succesfully Employee Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}