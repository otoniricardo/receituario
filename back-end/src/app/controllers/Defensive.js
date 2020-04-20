import Defensive from '../models/Defensive';

class DefensiveController {
  async store(req, res) {
    const defensiveExists = await Defensive.findOne({
      where: { name: req.body.name },
    });
    if (defensiveExists)
      return res
        .status(400)
        .json({ error: 'Já existe um defensivo com esse nome cadastrado.' });

    const {
      id,
      name,
      formulation,
      activeIngredient,
      chemicalGroup,
      producer,
      toxicologicalClass,
    } = await Defensive.create(req.body);

    return res.json({
      id,
      name,
      formulation,
      activeIngredient,
      chemicalGroup,
      producer,
      toxicologicalClass,
    });
  }

  async index(req, res) {
    const defensives = await Defensive.findAll();
    return res.json(defensives);
  }
}
export default new DefensiveController();
