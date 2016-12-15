var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('nfnto')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/solutions', function (req, res) {
  res.send('solutions')
})

app.get('/solutions/marketing-strategy', function (req, res) {
  res.send('marketing strategy')
})

app.get('/solutions/experience-design', function (req, res) {
  res.send('experience design')
})

app.get('/work', function (req, res) {
  res.send('our work')
})

app.get('/contact', function (req, res) {
  res.send('get in touch')
})

//404
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

//500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
