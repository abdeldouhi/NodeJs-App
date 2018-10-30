var express = require('express')

var router = express.Router()
var Customer = require('../../models/customer.model');
// Getting the Todo Controller that we just created

var CustomerController = require('../../controllers/customer.controller');


// Map each API to the Controller FUnctions

router.get('/', CustomerController.getCustomers)

router.post('/', CustomerController.createCustomer)

router.put('/', CustomerController.updateCustomer)

router.route('/:id')
.get((req,res)=>{
    Customer.findById(req.params.id   ,(err,customer)=>{
        if(err) res.send(err);
        res.json(customer);
    })
})
.delete((req,res)=>{
    Customer.deleteOne({_id:req.params.id},(err,customer)=>{
        if(err)
        res.send(err);
        res.json({message:'DELETED'});
    })
})
// Export the Router

module.exports = router;