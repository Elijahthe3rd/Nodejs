var visitorModel = require(`../model/visitor.model`)
var express = require('express')
var router = express.Router();

module.exports = class funcs{

post(req, res ){
        name:req.query.name
        var model = new visitorModel(req.body)
        model.save()
          .then(doc => {
            if (!doc || doc.length === 0) {
              return res.status(500)
            } else {
              res.status(201)
              res.send(doc)
            }
          }).catch(err => {
            res.status(500).json(err)
          })
}
//update prospect by id
updater(req, res){
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
  }
  
  //view prospect by id
  viewProspectById(req, res) {

    visitorModel.findOne({
      _id: req.params.id
    }).then(doc => {
      res.json(doc)
      console.log(`Prospect ID: ${_id} accessed successfully`);
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  
  //view all prospects
  viewAllProspects(req, res) {
    visitorModel.find({}).then(doc => {
      res.json(doc)
      console.log(`Prospect Database Accessed!!!`);
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  
  //delete by auto-generated id
  deleteVisitorByid(req, res) {
    
    visitorModel.findOneAndRemove({
      _id: req.params.id,
     
    }).then(doc => {
      res.json(doc);
      console.log(`Prospect ${_id} successfully deleted`);
    }).catch(err => {
      res.status(500).json(err)
    })
  }
  
  //delete all prospects
  deleteAll(req, res) {
        if (!req.body) {
      return res.status(400).send('MISSING URL PARAMETER:NAME')
    }
    visitorModel.deleteMany().then(RES => {
      res.json(RES)
      console.log(`Data successfully deleted`);
    }).catch(err => {
      res.status(500).json(err)
    })
}
}
   