'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('casos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tipo: {
                type: Sequelize.ENUM,
                values: ['OBITO', 'RECUPERADO', 'SUSPEITO', 'CONFIRMADO'],
                defaultValue: 'SUSPEITO'
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('casos');
    }
};
