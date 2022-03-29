
const express = require('express');
const exprhbs = require('express-handlebars');
const routes = require("./routes/index");
const app = express();



app.engine('handlebars', exprhbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes)



app.set('views', './views');



app.listen(3000, () => {
    console.log(`serve`)
})