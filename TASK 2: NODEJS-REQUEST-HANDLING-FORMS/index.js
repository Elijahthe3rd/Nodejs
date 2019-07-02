var express= require('express')
var morgan=require('morgan')
var app = express();
var port= process.env.port || 8000
var path = require('path')
const bodyParser= require('body-parser');
app.use(morgan("short"));

// app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{

res.sendFile('form.html',{root:path.join(__dirname,"./public")})
})

app.get('/form',(req,res)=>{

	res.sendFile('form.html',{root:path.join(__dirname,"./public")})
	})

app.post('/form',(req,res)=>{

 var userinfo={
		Title:req.body.titleselection,
		First_Name:req.body.firstname,
		Middle_Initial:req.body.midinitial,
		Last_Name:req.body.lastname,
		Email_Address:req.body.email,
		PhoneNumber:req.body.phone,
		Air_Line_Name:req.body.airlinename,
		Destination:req.body.destination,
		Leave_Date: req.body.leavedate,
		Returning_Date:  req.body.returnDate,
		 Cost_Estimations: req.body.estcost,
		Car_Rental:  req.body.carRental,
		Hotel: req.body.hotel,
		Meals:req.body.meals,
		Total_Estimation: req.body.totalEs,
		Cash: req.body.rad1,
		Card: req.body.rad2,
		Cheque:req.body.rad3,
		Comment:req.body.comment
	}

	console.info('Getting user info...');
	 console.info(`Title: `+ req.body.titleSelection);

	console.info(`First Name: ` + req.body.firstname);
	console.info(`Middle Initial: ` + req.body.midinitial);
	console.info(`Last Name: ` + req.body.lastname);
	console.info(`Email: ` + req.body.email);
	console.info(`Phone: ` + req.body.phone);
	console.info(`Air-Line: ` + req.body.airlinename);
	console.info(`destination: ` + req.body.destination);
	console.info(`Leave date: ` + req.body.leavedate);
	console.info(`Returning date: ` + req.body.returnDate);
	console.log(`Estimted cost: ` + req.body.estcost);
	console.info(`Car rental: ` + req.body.carRental);
	console.info(`Hotel: ` + req.body.hotel);
	console.info(`Meals: ` +req.body.meals);
	console.info(`Total Estimate: ` + req.body.totalEst);
	console.info(`cash: ` + req.body.rad1);
	console.log(`Card: ` + req.body.rad2);
	console.info(`Cheque: ` + req.body.rad3);
	console.info(`Comments: ` + req.body.comment);

	res.json(userinfo);
	
})

app.listen(port,()=>console.info(`Server running on port: ${port}`));
