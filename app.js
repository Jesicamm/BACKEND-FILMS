//-------------------------Requerimientos desde la raíz-----------------------------------------------------

const express = require('express')
const app = express();
const routerFilms = require('./Routers/routerFilm')
const routerUser = require('./Routers/routerUser')

//Middlewares
app.use(express.json());
app.use(routerFilms);
app.use(routerUser);



//------------------Requerimos mongoose y conexion a mongodb-------------------------------------------
const mongoose = require('mongoose');
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'videostore';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUEARY_STRING = MONGO_USER ?
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}` :
    `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;

// -----------------------------Conexion---------------------------------------------
mongoose.connect(QUEARY_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to Database'))
    .catch((error) => console.log(error));


//------------------------------Starting Server---------------------------------------------------------
app.listen(8000, function() {
    console.log("Node server running on http://localhost:8000");

});