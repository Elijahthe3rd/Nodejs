// var visitorModel=require(`../model/visitor.model`)
// var express=require('express')
// var router = express.Router()

// //create a new visitor
// //post localhost:8888/visitor

// router.post('/visitor',(req,res)=>{
//     //req.body
//     if(!req.body){
//       res.status(400).send(`request body is missing`)
//     }

//     // let user={
//     //     name:'firstname',
//     //     surname:'lastName',
//     //     age:'Age Number'
//     //     and etc
//     // } 
// //visitor model instance
//     var model = new visitorModel(req.body)
//     model.save()
//     .then(doc =>{
//         if(!doc || doc.length ===0){
//             return res.status(500).send(doc)
//         }else{
//             res.sendStatus(201).send(doc)
//             console.info(sendStatus(201),doc)
//         // res.status(201).send(doc)
//     }
// })
//     .catch(err=> {
//         res.status(500).json(err)
//     })

//     router.get('/visitor',(req,res)=>{
//         if(!req.body.name){
//             return res.sendStatus(400).send('MISSING URL PARAMETER:NAME')
//         }
//         visitorModel.findOne({
//             name:req.query.name
//         }).then(doc =>{
//             res.json(doc)
//         }).catch(err =>{
//             res.status(500).json(err)
//         })
//     })

//     router.delete('/visitor',function(req,res){
//         if(!req.body.name){
//             return res.sendStatus(400).send('MISSINGURL PARAMETER:NAME')
//         }
//         visitorModel.findOneAndRemove({
//             name:req.query.name
//             // surname:req.query.surname,
//             // age:req.query.age
//         }).then(doc =>{
//             res.json(doc)
//         }).catch(err =>{
//             res.status(500).json(err)
//     })
// })

//      router.put('/visitor',function(req,res){
//         if(!req.body.name){
//             return res.sendStatus(400).send('MISSINGURL PARAMETER:NAME')
//         }
//         visitorModel.findOneAndUpdate({
//             name:req.query.name
//             // surname:req.query.surname,
//             // age:req.query.age
//         },req.body,
//              {new: true})
//         .then(doc =>{
//             res.json(doc)
//         }).catch(err =>{
//             res.status(500).json(err)
//         })
//      })
//     })

// module.exports=router