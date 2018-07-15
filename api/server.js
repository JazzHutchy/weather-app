const express = require("express")
const app = express()

// Body Parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Allow access to 'Public' folder with CSS file (express doesn't allow this by default)
app.use(express.static('public'));
// Setup template engine for EJS
app.set('view engine', 'ejs')


// GET: Render the 'index' Embedded JS file
app.get('/', function (req, res) {
  res.render('index');
})

// POST
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

// Server location
app.listen(7000, function () {
  console.log("Example app listening on port 7000!")
})

