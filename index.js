const express = require('express');
const exprhbs = require('express-handlebars');
const app = express();



app.engine('handlebars', exprhbs.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json())
require("./routes/index")(app)


app.set('views', './views');



app.listen(3000)
 