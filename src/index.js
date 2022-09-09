const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
var methodOverride = require('method-override')

const port = 3001;

const db = require('./config/db');
const route = require('./routes');

// Local host --- Hosting
// Action ---> Dispatcher ---> Function Handler


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs', engine({ 
    extname: '.hbs',
    helpers: {
      sum: ( a, b) => a + b
    },//tạo function cho handlebar 
 }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//static
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
  express.urlencoded({
    extended: true,
    
  }),
);
//javascript
app.use(express.json());

//Routes init
route(app);

//Connect db

db.connect()




app.listen(port, () => {
  console.log(`App listening on //localhost:${port}`);
});
