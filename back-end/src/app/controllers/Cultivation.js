import Cultivation from '../models/Cultivation';

class CultivationController {
  async store(req, res) {
    const userExists = await Cultivation.findOne({
      where: { name: req.body.name },
    });
    if (userExists)
      return res.status(400).json({ error: 'Cultura já cadastrada' });

    const { id, name } = await Cultivation.create(req.body);

    return res.json({ id, name });
  }

  async index(req, res) {
    const cultivations = await Cultivation.findAll();
    return res.json(cultivations);
  }
}
export default new CultivationController();
