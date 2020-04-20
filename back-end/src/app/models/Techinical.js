import Sequelize, { Model } from 'sequelize';
// import bcrypt from 'bcryptjs';

class Techinical extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        phone: Sequelize.STRING,
        title: Sequelize.STRING,
        crea: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default Techinical;
