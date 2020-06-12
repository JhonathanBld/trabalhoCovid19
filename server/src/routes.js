const express = require('express');
const CasosController = require('./controllers/CasosController');

const routes = express.Router();

routes.get('/api/casos', CasosController.getByCount);
routes.post('/api/casos', CasosController.create);


module.exports = routes;