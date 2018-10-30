var express = require('express')

var router = express.Router()
var Employee=require('../../models/employee.model')
// Getting the Todo Controller that we just created

var EmployeeController = require('../../controllers/employee.controller');


// Map each API to the Controller FUnctions

router.get('/', EmployeeController.getEmployees)

router.post('/', EmployeeController.createEmployee)

router.put('/', EmployeeController.updateEmployee)

router.route('/:id')
.get((req,res)=>{
    Employee.findById(req.params.id   ,(err,employee)=>{
        if(err) res.send(err);
        res.json(employee);
    })
})
.delete((req,res)=>{
    Employee.deleteOne({_id:req.params.id},(err,employee)=>{
        if(err)
        res.send(err);
        res.json({message:'DELETED'});
    })
})

// Export the Router

module.exports = router;