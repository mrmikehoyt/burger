var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')
const app = express();

app.use(express.static("public"));// http://expressjs.com/en/guide/routing.html

// define the home page route
router.get('/', function (req, res) {
	 // res.send('test');
   burger.selectAll(function (data) {
    var handlebarObject = { burgers: data };
    console.log(handlebarObject);
    //render the index.handlebar page
    res.render('index', handlebarObject);

    });

});

// Create a New Burger to the DB
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});

// Devour a Burger
router.post('/burger/eat', function (req, res) {
  burger.updateOne(req.body.id, function() {
    res.redirect('/');
  });
});
router.post('/burger/restore', function (req, res) {
  burger.restoreOne(req.body.id, function() {
    res.redirect('/');
  });
});

module.exports = router;