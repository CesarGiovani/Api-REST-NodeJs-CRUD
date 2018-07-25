'use strict'

var express = require('express');
var FrutaController = require('../controllers/fruta');

var api = express.Router();

api.get('/pruebas',FrutaController.pruebas);
api.post('/frutas',FrutaController.saveFruta);
api.get('/frutas',FrutaController.getFruta);
api.get('/frutas/:id',FrutaController.getSolo);
api.put('/frutas/:id',FrutaController.updateFruta);
api.delete('/frutas/:id',FrutaController.deleteFruta);

module.exports = api;
