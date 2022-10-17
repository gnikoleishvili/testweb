const express =require("express");
const bodyParser =require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){
  var firstName = req.body.fName
  var lastName = req.body.lName
  var email = req.body.email

  console.log(firstName, lastName, email);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000.")
});

// ID mailchimp
// c07ed0229a
// API Key
// 3a0a4877f1a64b704b2b052d43252dad-us21
