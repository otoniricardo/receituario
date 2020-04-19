import Sequelize, { Model } from 'sequelize';

class DefensivePacking extends Model {
  static init(sequelize) {
    super.init(
      {
        defensiveId: Sequelize.INTEGER,
        packingId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default DefensivePacking;
