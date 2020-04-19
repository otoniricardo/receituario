module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('defensives', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      formulation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active_ingredient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chemical_group: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      producer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      toxicological_class: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('defensives');
  },
};
