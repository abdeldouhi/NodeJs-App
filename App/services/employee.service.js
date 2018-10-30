var Employee = require('../models/employee.model')

_this = this


exports.getEmployees = async function(query, page, limit){


    var options = {
        page,
        limit
    }
    
    
    try {
        var employees = await Employee.paginate(query, options)
        

        return employees;

    } catch (e) {


        throw Error('Error while Paginating Employees')
    }
}

exports.createEmployee = async function(employee){
    

    var newEmployee = new Employee({
        name:employee.name,
    firstName:employee.firstName,
    username:employee.username,
    birthDate:employee.birthDate,
    address:employee.address,
    phone:employee.phone,
    email:employee.email,
    position:employee.position,
    project:employee.project
    })

    try{


        var savedEmployee = await newEmployee.save()

        return savedEmployee;
    }catch(e){
      

        throw Error("Error while Creating Employee")
    }
}

exports.updateEmployee = async function(employee){
    var id = employee.id

    try{
    
        var oldEmployee = await Employee.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Employee")
    }


    if(!oldEmployee){
        return false;
    }

    console.log(oldEmployee)


    oldEmployee.name=employee.name;
    oldEmployee.firstName=employee.firstName;
    oldEmployee.username=employee.username;
    oldEmployee.birthDate=employee.birthDate;
    oldEmployee.address=employee.address;
    oldEmployee.phone=employee.phone;
    oldEmployee.email=employee.email;
    oldEmployee.position=employee.position;
    oldEmployee.project=employee.project;
    console.log(oldEmployee)

    try{
        var savedEmployee = await oldEmployee.save()
        return savedEmployee;
    }catch(e){
        throw Error("And Error occured while updating the Employee");
    }
}

exports.deleteEmployee = async function(id){
    

    try{
        var deleted = await Employee.deleteOne({_id: id})
        if(deleted.result.n === 0){
            throw Error("Employee Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Employee")
    }
}