const Casos = require('../models/Casos');

module.exports = {
    async buscarCasos(req, res) {
        try {
            let response = await Casos.findAll();
            return res.status(200).json(response);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async criarCaso(req, res) {
        const {id_estado , id_cidade , tipo , descricao} = req.body;

        try {
            let response = await Casos.create({
                id_cidade , id_estado , tipo , descricao
            });
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json(err);
        }
    }

};