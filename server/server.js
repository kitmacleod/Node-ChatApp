const path = require('path');
const express = require('express');
//const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
// Heroku 
const port = process.env.PORT || 3000; 

var app = express();

// set up express and configure middleware, on 3000
// I copied over some code, not sure if we are to use hbs

// middleware
//hbs.registerPartials ()
//app.set('view engine', 'hbs');
app.use(express.static(publicPath));


//app.get('/', (req, res) => {
//  res.render('home.hbs, {})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}); 