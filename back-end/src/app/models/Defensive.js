import Sequelize, { Model } from 'sequelize';

class Defensive extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        formulation: Sequelize.STRING,
        activeIngredient: Sequelize.STRING,
        chemicalGroup: Sequelize.STRING,
        producer: Sequelize.STRING,
        toxicologicalClass: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Defensive;
