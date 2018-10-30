
var CustomerService = require('../services/customer.service')

// Saving the context of this module inside the _the variable

_this = this



exports.getCustomers = async function(req, res, next){

    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var customers = await CustomerService.getCustomers({}, page, limit)
        
        
        return res.status(200).json({status: 200, data: customers, message: "Succesfully Customers Recieved"});
        
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createCustomer = async function(req, res, next){


    var customer = {
        companyName:req.body.companyName,
        address:req.body.address,
        referent:req.body.referent,
        area:req.body.area,
        project:req.body.project

    }

    try{
        
    
        var createdCustomer = await CustomerService.createCustomer(customer)
        return res.status(201).json({status: 201, data: createdCustomer, message: "Succesfully Created Customer"})
    }catch(e){
        
        
        return res.status(400).json({status: 400, message: "Customer Creation was Unsuccesfull"})
    }
}

exports.updateCustomer = async function(req, res, next){


    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var customer = {
        id,
        companyName:req.body.companyName?req.body.companyName : null,
        address:req.body.address ?req.body.address : null,
        referent:req.body.referent ? req.body.referent : null,
        area:req.body.area ? req.body.area : null,
        project:req.body.project ? req.body.project : null
    }

    try{
        var updatedCustomer = await CustomerService.updateCustomer(customer)
        return res.status(200).json({status: 200, data: updatedCustomer, message: "Succesfully Updated Customer"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}
exports.getSingleCustomer= async function(req,res,next){
    var id=req.params.id;
    try {
        var customer=await CustomerService.getSingleCustomer(id);
        return res.status(200).json({status:204,data:customer,message:"Got one"});
    }
    catch(e){
        return res.status(400).json({status:400,message:e.message});
    }
}
exports.removeCustomer = async function(req, res, next){

    var id = req.params.id;
   
    try{
        var deleted = await CustomerService.deleteCustomer(id)
        return res.status(204).json({status:204, data:deleted,message: "Succesfully Customer Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}