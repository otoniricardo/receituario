import Sequelize, { Model } from 'sequelize';

class DefensiveCultivation extends Model {
  static init(sequelize) {
    super.init(
      {
        defensiveId: Sequelize.INTEGER,
        cultivationId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default DefensiveCultivation;
