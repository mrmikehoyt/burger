var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')
const app = express();
//serves static content from public directory
app.use(express.static("public"));// http://expressjs.com/en/guide/routing.html

// define the home page route
// u
router.get('/*', function (req, res) {
 //calls orm selectAll method
  burger.selectAll(function (data) {
    
    var handlebarObject = { burgers: data };
    //console logs that information to console
    console.log(handlebarObject);
    //renders the information to index page for handlebars 
    res.render('index', handlebarObject);

    });

});

// post route create method for new burger to be inserted into database - it's not inserted into database 
//table on this page
//// by default goes to waiting to be devoured because devoured = false in table
router.post('/burger/create', function (req, res) {
  //calls insertone model method and passes burger thats from burger_name middleware
  burger.insertOne(req.body.burger_name, function() {
    //redirects page back to /
    res.redirect('/');
  });
});

//post method that calls updateone model method with req.body.id middleware that redirects back to /
router.post('/burger/eat', function (req, res) {
  burger.updateOne(req.body.id, function() {
    res.redirect('/');
  });
});
//psot method that calls restoreone model method with req.body.id middleware than redirects back to /
router.post('/burger/restore', function (req, res) {
  burger.restoreOne(req.body.id, function() {
    res.redirect('/');
  });
});
//exports router
module.exports = router;