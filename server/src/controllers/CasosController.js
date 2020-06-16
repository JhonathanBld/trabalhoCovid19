const Casos = require('../models/Casos');
const sequelize = require('sequelize');

module.exports = {
    async getByCount(req, res, next) {

        try {
            // Consulta com count por tipo de status, agrupada por estado, cidade e tipo
            let response = await Casos.findAll({
                group: ['estado', 'cidade', 'tipo'],
                attributes: ['estado', 'cidade', 'tipo', [sequelize.fn('count', sequelize.col('tipo')), 'quantidade']],
                where : {
                    estado : req.query.estado ? req.query.estado : null,
                    tipo : req.query.status ? req.query.status : null,
                }
            });
            return res.status(200).json(response);
        } catch (err) {
            return next(err);
        }
    },

    async create(req, res, next) {
        // cria o caso
        try {
            let response = await Casos.create(req.body);
            res.status(200).json(response);
        } catch (err) {
            next(err);
        }
    }

};