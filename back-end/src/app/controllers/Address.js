import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const addressExists = await Address.findOne({
      where: { userId: req.body.userId },
    });
    if (addressExists)
      return res
        .status(400)
        .json({ error: 'Este usuário já possui endereço cadastrado' });

    const {
      userId,
      cep,
      street,
      number,
      complement,
      city,
      uf,
    } = await Address.create(req.body);

    return res.json({
      userId,
      cep,
      street,
      number,
      complement,
      city,
      uf,
    });
  }

  async index(req, res) {
    const addresses = await Address.findAll();
    return res.json(addresses);
  }
}
export default new AddressController();
