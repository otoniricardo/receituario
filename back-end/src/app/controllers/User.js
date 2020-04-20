import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { doc: req.body.doc },
    });
    if (userExists)
      return res
        .status(400)
        .json({ error: 'Já existe um usuário cadastrado com esse documento.' });

    const { id, name, email, doc, phone } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      doc,
      phone,
    });
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}
export default new UserController();
