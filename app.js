'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

// cargar rutas
var fruta_routers = require('./routes/fruta');

//body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar CORS
app.use('/api',fruta_routers);
// rutas



module.exports = app;
