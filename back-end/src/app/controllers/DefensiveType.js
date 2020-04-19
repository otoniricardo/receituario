import DefensiveType from '../models/DefensiveType';

class DefensiveTypeController {
  async store(req, res) {
    const userExists = await DefensiveType.findOne({
      where: { name: req.body.name },
    });
    if (userExists)
      return res.status(400).json({ error: 'Cultura já cadastrada' });

    const { id, name } = await DefensiveType.create(req.body);

    return res.json({ id, name });
  }

  async index(req, res) {
    const defensiveTypes = await DefensiveType.findAll();
    return res.json(defensiveTypes);
  }
}
export default new DefensiveTypeController();
