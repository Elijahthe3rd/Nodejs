const mongoose = require('mongoose')

const DB_Connect ="mongodb://127.0.0.1:27017/test_Database"
var bodyParser=require('body-parser')

bodyParser.json()

mongoose.connect(`${DB_Connect}`, { useNewUrlParser: true },(err)=>{
    if(err){
        console.info(`Error encountered`)
        console.info(err)
    }else{
        console.info(`connection to DB was Successful`)
    }
});
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

var visitorSchema = new mongoose.Schema({
            // _id:{
            //     type:Number,
            //     default:1,
            //     unique:false,
            // },
            name:{
                type:String,
                // required:true
                unique:false
            },

            surname:{
                type:String,
                // required:true
                unique:false
            },
            age:{
                type:Number,
                unique:false
            },
            subject:{
                type:String,
                // required:true
                unique:false
            },
            

            assistor:{
                type:String,
                // required:true
                unique:false
            },
            
            date:{
                type:Date,
                default:Date.now.hours,
                unique:false

                },
                
})

module.exports=mongoose.model('visitor',visitorSchema);

