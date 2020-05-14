//uesd for web application server
const express = require('express')
//used for middleware
const bodyParser = require("body-parser");
// might not need const connection =require('./config/connection')
const app = express();
//for serving static files under public
app.use(express.static("public"));
// Set the port of our application
const PORT = process.env.PORT || 3000;
//disabled etag validation, for webcache validation. used for heroku troubleshooting 304 / 302 error
app.set('etag', false);
//for parsing middleware 
app.use(bodyParser.urlencoded({
  extended: true
}));

//to use handlebars
var exphbs = require("express-handlebars");
//sets default page handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
//contains routes that are used and loads routes under burgers_controller.js
var burgerroutes = require('./controller/burgers_controller.js')

app.use('/', burgerroutes)


// Starts the express server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Logs in console when server has started
  console.log("Listening on: http://localhost:" + PORT);
});