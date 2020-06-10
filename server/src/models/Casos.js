const {Model , DataTypes } = require('sequelize');

class Casos extends Model {
    static init(sequelize) {
        super.init({
            cidade : DataTypes.STRING,
            estado : DataTypes.STRING,
            tipo : DataTypes.INTEGER,
            descricao : DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = Casos;