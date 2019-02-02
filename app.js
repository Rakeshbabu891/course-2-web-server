const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partial');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
// app.use((req, res, next) => {
//   res.render('maintanance.hbs');
// });

app.get('/', (req, res) => {
  res.render('home.hbs', {
    page:'Home page',
    date:new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    page:'About page',
    date:new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Server has been started well at port no ${port}`);
});
