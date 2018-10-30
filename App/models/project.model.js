var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ProjectSchema=new mongoose.Schema({
    name:String,
    description:String,
    startDate:Date,
    endDate:Date,
    customer:String,
    employees:[],
    ammount:Number,
    status:String 
  })


  ProjectSchema.plugin(mongoosePaginate);

  const Project=mongoose.model('Project',ProjectSchema);
  module.exports=Project;