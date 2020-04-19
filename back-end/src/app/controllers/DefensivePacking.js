import DefensivePacking from '../models/DefensivePacking';

class DefensivePackingController {
  async store(req, res) {
    const association = await DefensivePacking.findOne({
      where: {
        defensiveId: req.body.defensiveId,
        cultivationId: req.body.cultivationId,
      },
    });
    if (association)
      return res
        .status(400)
        .json({ error: 'Associação Defensivo-Cultura já cadastrada.' });

    const { defensiveId, cultivationId } = await DefensivePacking.create(
      req.body
    );

    return res.json({
      defensiveId,
      cultivationId,
    });
  }

  async index(req, res) {
    const { packingId } = req;
    const associations = await DefensivePacking.findAll({
      where: { packingId },
    });
    return res.json(associations);
  }
}
export default new DefensivePackingController();
