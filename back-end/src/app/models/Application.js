import Sequelize, { Model } from 'sequelize';

class Application extends Model {
  static init(sequelize) {
    super.init(
      {
        defensiveId: Sequelize.INTEGER,
        cultivationId: Sequelize.INTEGER,
        dosage: Sequelize.INTEGER,
        prague: Sequelize.STRING,
        applicationMode: Sequelize.STRING,
        applicationInterval: Sequelize.INTEGER,
        applicationAmount: Sequelize.FLOAT,
        applicationVolume: Sequelize.FLOAT,
        safetyInterval: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Application;
