
//const routes = require("/routes");
const express = require('express');
const exprhbs = require('express-handlebars');
const app = express();

const conn = require('./db/conn');

app.engine('handlebars', exprhbs.engine());
app.set('view engine', 'hadlebars');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(routes)

app.set("views", "views");


conn
.sync()
//.sync({force:true}) // ele forma os dados ter a minha modelagem de construção
.then(() =>{
    app.listen(3000)
}).catch((err) => console.log(err))
