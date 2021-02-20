//Requerimos express a una constante.

const express = require('express'),
    app = express(),
    http = require("http"),
    server = http.createServer(app);
//Requerimos bodyparser & methodOverride (para parsear json y personalizar metodos http)

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//requerimos mongoose
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello World')
});

app.use(router);


mongoose.connect('mongodb://localhost/film', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;
    console.log('Conected to Database');


});

app.listen(8000, function() {
    console.log("Node server running on http://localhost:8000");

});
/* mongoose.connect('mongodb://localhost/film', function(err, res) {
            if (err) {
                console.log('ERROR: connecting to Database. ' + err);
            }
        

            const port = 8000;

            app.listen(port, () => console.log(`Listening at ${port}`)); */