import Sequelize, { Model } from 'sequelize';

class Packing extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        fration: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Packing;
