const express = require("express")
const app = express()

app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})

app.listen(7000, function () {
  console.log("Example app listening on port 7000!")
})

app.set('view engine', 'ejs')
