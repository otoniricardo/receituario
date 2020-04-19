module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('defensive_cultivations', {
      defensive_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'defensives',
          key: 'id',
        },
      },
      culture_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cultures',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('defensive_cultivations');
  },
};
