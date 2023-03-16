var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();
app.listen(8080);
app.engine('.hbs', expressHbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine','.hbs');

app.get('/home', function(req,res){
    res.render('index');
});