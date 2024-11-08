const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',{
        'pageHeading' : "Main Page",
        'siteTitle' : "Lameo Demo"
    });
});

app.get('/other', function (req, res) {
    res.render('other',{
        'pageHeading' : "Other Page",
        'siteTitle' : "Lameo Demo",
        'colors' : ['red','gree','blue'],
        'person' : {
            'name' : 'Merlin',
            'age' : 968
        }
    });
});

app.get('/favorites', function (req, res) {
    res.render('favorites',{
        'pageHeading' : "Favorites Page",
        'companies' : [
            {"name": "Ubisoft", "url": "https://www.ubisoft.com" },
            {"name": "Nintendo", "url": "https://www.nintendo.com" },
            {"name": "Iron Galaxy", "url": "https://www.irongalaxystudios.com/" } 
          ]
    });
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
