const express = require('express')
const bodyParser = require("body-parser");
const connection =require('./config/connection')
const app = express();

// Set the port of our application
const PORT = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.set('etag', false);
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
// Parses json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
//sets default page handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//used for routes
var burgerroutes = require('./controller/burgers_controller.js')

app.use('/',burgerroutes)


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Listening on: http://localhost:" + PORT);
});
