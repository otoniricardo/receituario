module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('applications', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      dosage: {
        type: Sequelize.INTERGER,
        allowNull: false,
      },
      prague: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      application_mode: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      application_interval: {
        type: Sequelize.INTERGER,
        defaultValue: false,
      },
      application_amount: {
        type: Sequelize.FLOAT,
        defaultValue: false,
      },
      application_volume: {
        type: Sequelize.FLOAT,
        defaultValue: false,
      },
      safety_interval: {
        type: Sequelize.INTERGER,
        defaultValue: false,
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
    return queryInterface.dropTable('applications');
  },
};
