var express = require('express')
var router = express.Router();

var functionPaths=require(`../controller/functions`)

var obj= new functionPaths();

//add new user data
router.post('/addNewProspect',(req,res)=>{
    obj.post(req,res)
})

//view all prospects
router.get('/viewAllProspects',(req,res)=>{
    obj.viewAllProspects(req,res)
})

router.get('/viewProspectByid/:id',(req,res)=>{
    obj.viewProspectById(req,res)
})

// update prospect by id
router.patch('/updateOne/:id',(req,res)=>{
    obj.updater(req,res)
})

//delete prospect by id
router.delete('/deleteOne/:id',(req,res)=>{
    obj.deleteVisitorByid(req,res)
})

//delete all prospects
router.delete('/deleteAll',(req,res)=>{
    obj.deleteAll(req,res)
})
module.exports = router
