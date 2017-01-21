var express = require('express')
var app = express()

app.set('title', 'NFNTO');
app.get('title'); // "My Site"

app.set('view engine', 'pug')

app.use(express.static('public')) // To serve static files

/*
* English Site
*/
app.get('/', function (req, res) {
  //original res.render('index', { title: 'Hey', message: 'Hello there, welcome to nfnto!' })
  res.render('index')
  //res.send('nfnto')
})
app.get('/about', function (req, res) {
  //res.send('about')
  res.render('about')
})
app.get('/solutions', function (req, res) {
  //res.send('solutions')
  res.render('solutions')
})
app.get('/solutions/marketing-strategy', function (req, res) {
  //res.send('marketing strategy')
  res.render('marketing-strategy')
})
app.get('/solutions/experience-design', function (req, res) {
  res.render('experience-design')
})
app.get('/work', function (req, res) {
  res.render('our-work')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
//English Redirects
app.get('/marketing-strategy', function (req, res) {
  res.redirect('/solutions/marketing-strategy')
})
app.get('/experience-design', function (req, res) {
  res.redirect('/solutions/experience-design')
})
app.get('/solutions/contact', function (req, res) {
  res.redirect('/contact')
})
/*
* Spanish Site
*/
app.get('/es', function (req, res) {
  //original res.render('index', { title: 'Hey', message: 'Hello there, welcome to nfnto!' })
  res.render('es/index')
  //res.send('nfnto')
})
app.get('/es/acerca', function (req, res) {
  //res.send('about')
  res.render('es/acerca')
})
app.get('/es/soluciones', function (req, res) {
  //res.send('solutions')
  res.render('es/soluciones')
})
app.get('/es/soluciones/estrategia-de-marketing', function (req, res) {
  //res.send('marketing strategy')
  res.render('es/estrategia-de-marketing')
})
app.get('/es/soluciones/experiencia-de-usuario', function (req, res) {
  res.render('es/experiencia-de-usuario')
})
app.get('/es/portafolio', function (req, res) {
  res.render('es/portafolio')
})
app.get('/es/contacto', function (req, res) {
  res.render('es/contacto')
})
//Spanish Redirects
app.get('/es/estrategia-de-marketing/', function (req, res) {
  res.redirect('/es/soluciones/estrategia-de-marketing')
})
app.get('/es/experiencia-de-usuario', function (req, res) {
  res.redirect('/es/soluciones/experiencia-de-usuario')
})
app.get('/es/soluciones/contacto', function (req, res) {
  res.redirect('/es/contacto')
})

//404
app.use(function (req, res, next) {
  res.status(404).render('4oh4')
})
//500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
