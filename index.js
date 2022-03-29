const express = require('express');
const exprhbs = require('express-handlebars');
//const routes = require("./routes");
const app = express();
require("./routes")(app)

const conn = require('./db/conn')

app.engine('handlebars', exprhbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes)



app.set('views', './views');

conn
    .sync()
    //.sync({force:true}) // ele forma os dados ter a minha modelagem de construção
    .then(() => {
        app.listen(3000)
    }).catch((err) => console.log(err))



//app.listen(3000, () => {
   // console.log(`serve`)
//})