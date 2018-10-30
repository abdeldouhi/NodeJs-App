
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var EmployeeSchema = new mongoose.Schema({
    name:String,
    firstName:String,
    username:String,
    birthDate:Date,
    address:String,
    phone:String,
    email:String,
    position:String,
    project:String
    
})


EmployeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model('Employee', EmployeeSchema);


module.exports = Employee;