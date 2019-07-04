var express = require('express')
let app = express()
//create express application

var bodyParser = require('body-parser')

app.use(bodyParser.json())
var personRoute = require('./routes/routes')


app.use((req, res, next) => {
  //time,date object with timezone and visitor/requested URL
  console.info(`${new Date().toString()}=>${req.originalUrl}`)

  console.info(req.body)

  //reference to the next function in pipeline
  next()
})

app.use(personRoute)

//serving static-file
app.use(express.static("public"))

const port = process.env.port || 8888

app.listen(port, function () {
  console.info("Server is running port:%s", port);
})
