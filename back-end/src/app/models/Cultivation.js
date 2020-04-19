import Sequelize, { Model } from 'sequelize';

class Cultivation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Cultivation;
