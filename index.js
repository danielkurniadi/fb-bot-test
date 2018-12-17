const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var router = express.Router();
const initRoutes = require('./server/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// initialize the routes
app.use('/', initRoutes(router));

app.listen(3000, () => {
    console.log('Webhook server is listening, port 3000');
});

