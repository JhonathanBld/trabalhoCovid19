const {Model , DataTypes } = require('sequelize');

class Casos extends Model {
    static init(sequelize) {
        super.init({
            id_cidade : DataTypes.INTEGER,
            id_estado : DataTypes.INTEGER,
            tipo : DataTypes.INTEGER,
            descricao : DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = Casos;