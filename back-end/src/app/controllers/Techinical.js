import User from '../models/User';

class TechinicalController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { cpf: req.body.cpf },
    });
    if (userExists)
      return res
        .status(400)
        .json({ error: 'Já existe um tecnico cadastrado com esse CPF.' });

    const { id, name, email, doc, phone, title, crea } = await User.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      doc,
      phone,
      title,
      crea,
    });
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}
export default new TechinicalController();
