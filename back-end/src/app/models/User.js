import Sequelize, { Model } from 'sequelize';
// import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        doc: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default User;
