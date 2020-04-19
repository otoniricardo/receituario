import Packing from '../models/Packing';

class PackingController {
  async store(req, res) {
    const packingExists = await Packing.findOne({
      where: { name: req.body.name },
    });
    if (packingExists)
      return res.status(400).json({ error: 'Embalagem já cadastrada.' });

    const { id, name, fraction } = await Packing.create(req.body);

    return res.json({ id, name, fraction });
  }

  async index(req, res) {
    const packings = await Packing.findAll();
    return res.json(packings);
  }
}
export default new PackingController();
