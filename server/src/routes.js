const express = require('express');
const CasosController = require('./controllers/CasosController');

const routes = express.Router();

routes.get('/api/casos' , CasosController.buscarCasos);
routes.post('/api/casos' , CasosController.criarCaso);

module.exports = routes;