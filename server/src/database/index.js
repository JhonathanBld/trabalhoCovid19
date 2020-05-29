const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Casos = require('../models/Casos');

const connection = new Sequelize(dbconfig);

Casos.init(connection);


Casos.acociate(connection.models);

module.exports = connection;