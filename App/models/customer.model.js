
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')



var CustomerSchema=new mongoose.Schema({
    companyName:String,
    address:String,
    referent:String,
    area:String,
    project:String
    
    })
CustomerSchema.plugin(mongoosePaginate);
const Customer=mongoose.model('Customer',CustomerSchema);
module.exports=Customer;