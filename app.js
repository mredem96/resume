const express = require('express');
const hbs = require('hbs');


const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Hojiakbar Karimov',
    welcomeMessage: 'Welcome to my website'
  });
});




app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});