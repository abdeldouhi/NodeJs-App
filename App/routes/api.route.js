var express = require('express')

var router = express.Router()
var employee = require('./api/employee.route')
var customer=require('./api/customer.route')
var project=require('./api/project.route')


router.use('/employee', employee);
router.use('/customer',customer);
router.use('/project',project);


module.exports = router;