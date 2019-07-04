var express = require('express')
var router = express.Router();
var controller = require(`../controller/userController`)

var path = require('path');
router.use(controller)

module.exports = router
