var visitorModel = require(`../model/visitor.model`)
var express = require('express')
var router = express.Router();

var path = require('path');


//creating a new prospect
router.post('/addNewProspect', (req, res) => {
    if (!req.body) {
        res.status(400).send(`request body is missing`)
    }

    //visitor model instance
    var model = new visitorModel(req.body)
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500)
            } else {
                res.status(201).send(doc)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
})

//update prospect by id using put method
router.put('/updateProspect/:id', (req, res) => {
    visitorModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.status(401)
            console.error(err);
        })
})

//update prospect by id using patch

//router.patch('/patchUpdateProspect/:id', (req, res) => {
  //  if (!req.body) {
    //    res.status(400).send(`request body is missing`)
    //}
   // visitorModel.findOne({
       //     _id: req.params.id
     //   }, req.body, {
         //   new: true
        //})
        //.then(doc => {
         //   res.json(doc)
        //}).catch(err => {
          //  res.status(500).json(err)
        //})
//})

//view prospect by params name
router.get('/prospect/:name', (req, res) => {
    Name = req.params.name;
    if (!req.body) {
        console.info(`request body is missing`)
        res.status(400)
    } else if (Name) {
        res.status(201)
        res.json(req.body)
        console.info('your have requested for person %s', Name);
    } else {
        res.send('you have requested for person')
    }
})

//view prospect by id
router.get('/viewProspect/:id', (req, res) => {

    if (!req.body) {
        res.status(400).send(`request body is missing`)
    }
    visitorModel.findOne({
        _id: req.params.id
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//view all prospects
router.get('/viewAllProspects', (req, res) => {
    // if(!req.body.name){
    //     return res.sendStatus(400).send('MISSING URL PARAMETER:NAME')
    // }
    visitorModel.find({}).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//delete by auto-generated id
router.delete('/visitor/:id', function (req, res) {
    // if(!req.body.name){
    //     return res.status(400).send('MISSING URL PARAMETER:NAME')
    // }
    visitorModel.findOneAndRemove({
        _id:req.params.id,
        // surname:req.query.surname,
        // age:req.query.age
    }).then(doc => {
        res.json(doc);

    }).catch(err => {
        res.status(500).json(err)
    })
})

//delete prospect by name
router.delete('/prospect/:name', function (req, res) {
    if (!req.params.name) {
        return res.status(400).send('MISSING URL PARAMETER:NAME')
    }
    visitorModel.findOneAndRemove({
        name: req.params.name
        // surname:req.query.surname,
        // age:req.query.age
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(err)
    })
})

//delete all prospects
router.delete('/DeleteAllprospects', function (req, res) {
    if (!req.body) {
        return res.status(400).send('MISSING URL PARAMETER:NAME')
    }
    visitorModel.deleteMany().then(RES => {
        res.json(RES)
        console.log(`Prospect deleted`);
    }).catch(err => {
        res.status(500).json(err)
    })
})



module.exports = router
