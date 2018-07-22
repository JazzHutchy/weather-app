const express = require('express')
const bodyParser = require('body-parser');
const request = require('request')
const app = express()

const apiKey = '******************'

// Allow access to 'Public' folder with CSS file (express doesn't allow this by default)
app.use(express.static('public'));
// Enable Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// Setup template engine for EJS
app.set('view engine', 'ejs')

// GET: Render the 'index' Embedded JS file
app.get('/', function (req, res) {
  res.render('index', { weather: null, error: null });
})

// POST
app.post("/", function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  request(url, function (err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${
          weather.name
          }!`;
        console.log(weatherText);
        res.render("index", { weather: weatherText, error: null });
      }
    }
  });
});

// Server location
app.listen(7000, function () {
  console.log("Example app listening on port 7000!")
})

