const Casos = require('../models/Casos');
const sequelize = require('sequelize');

module.exports = {
    async getByCount(req, res) {
        try {
            // Consulta com count por tipo de status, agrupada por estado, cidade e tipo
            let response = await Casos.findAll({
                group: ['id_estado', 'id_cidade', 'tipo'],
                attributes: ['id_estado', 'id_cidade', 'tipo', [sequelize.fn('COUNT', '*'), 'quantidade']]
            });
            return res.status(200).json(response);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async create(req, res) {
        // cria o caso
        const {id_estado, id_cidade, tipo, descricao} = req.body;
        try {
            let response = await Casos.create({
                id_cidade, id_estado, tipo, descricao
            });
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json(err);
        }
    }

};