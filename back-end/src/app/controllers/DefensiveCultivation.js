import DefensiveCultivation from '../models/DefensiveCultivation';

class DefensiveCultivationController {
  async store(req, res) {
    const association = await DefensiveCultivation.findOne({
      where: {
        defensiveId: req.body.defensiveId,
        cultivationId: req.body.cultivationId,
      },
    });
    if (association)
      return res
        .status(400)
        .json({ error: 'Associação Defensivo-Cultura já cadastrada.' });

    const { defensiveId, cultivationId } = await DefensiveCultivation.create(
      req.body
    );

    return res.json({
      defensiveId,
      cultivationId,
    });
  }

  async index(req, res) {
    const { cultivationId } = req;
    const associations = await DefensiveCultivation.findAll({
      where: { cultivationId },
    });
    return res.json(associations);
  }
}
export default new DefensiveCultivationController();
