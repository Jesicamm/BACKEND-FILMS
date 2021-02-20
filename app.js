//Requerimos express a una constante.

const express = require('express');
const app = express();

//Requerimos bodyparser & methodOverride (para parsear json y personalizar metodos http)

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();
router.get('/', function(req, res) {
    res.send('Hello WOrld')
});
app.use(router);

const port = 8000;

app.listen(port, () => console.log(`Listening at ${port}`));