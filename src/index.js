const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3001;

const route = require('./routes');

// Local host --- Hosting
// Action ---> Dispatcher ---> Function Handler

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

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

app.listen(port, () => {
  console.log(`Example app listening on //localhost:${port}`);
});
