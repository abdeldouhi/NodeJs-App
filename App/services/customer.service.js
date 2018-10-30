var Customer = require('../models/customer.model')

// Saving the context of this module inside the _the variable
_this = this


exports.getCustomers = async function(query, page, limit){


    var options = {
        page,
        limit
    }
    
    
    try {
        var Customers = await Customer.paginate(query, options)
        

        return Customers;

    } catch (e) {


        throw Error('Error while Paginating Customers')
    }
}

exports.createCustomer = async function(customer){
    

    var newCustomer = new Customer({
        companyName:customer.companyName,
    address:customer.address,
    referent:customer.referent,
    area:customer.area,
    project:customer.project
    })

    try{


        var savedCustomer = await newCustomer.save()

        return savedCustomer;
    }catch(e){
      

        throw Error("Error while Creating Customer")
    }
}


exports.getSingleCustomer=async function(id){
    var customer= await Customer.findById(id);
    return customer;
}
exports.updateCustomer = async function(customer){
    var id = customer.id

    try{
    
        var oldCustomer = await Customer.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Customer")
    }


    if(!oldCustomer){
        return false;
    }

    console.log(oldCustomer)


    oldCustomer.companyName=customer.companyName;
    oldCustomer.address=customer.address;
    oldCustomer.referent=customer.referent;
    oldCustomer.area=customer.area;
    oldCustomer.project=customer.project

    console.log(oldCustomer)

    try{
        var savedCustomer = await oldCustomer.save()
        return savedCustomer;
    }catch(e){
        throw Error("And Error occured while updating the Customer");
    }
}

exports.deleteCustomer = async function(id){
    

    try{
        var deleted = await Customer.remove({_id:id});
        
        if(deleted.result.n === 0){
            throw Error("Customer Could not be deleted")
        }
        return deleted
    }catch(e){
        console.log("HERE")
        throw Error("Error Occured while Deleting the Customer")
    }
}