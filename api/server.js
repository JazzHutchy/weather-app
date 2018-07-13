const express = require("express")
const app = express()

// Allow access to 'Public' folder with CSS file (express doesn't allow this by default)
app.use(express.static('public'));
// Setup template engine for EJS
app.set('view engine', 'ejs')


// Render the 'index' Embedded JS file
app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})

// Server location
app.listen(7000, function () {
  console.log("Example app listening on port 7000!")
})

