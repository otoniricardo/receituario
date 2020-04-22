import Application from '../models/Application';

class ApplicationController {
  async store(req, res) {
    const applicationExists = await Application.findOne({
      where: {
        defensiveId: req.body.defensiveId,
        cultivationId: req.body.cultivationId,
      },
    });
    if (applicationExists)
      return res.status(400).json({
        error: 'Aplicação deste defensivo para esta cultura ja foi cadastrada.',
      });

    const {
      defensiveId,
      cultivationId,
      dosage,
      prague,
      applicationMode,
      applicationInterval,
      applicationAmount,
      applicationVolume,
      safetyInterval,
    } = await Application.create(req.body);

    return res.json({
      defensiveId,
      cultivationId,
      dosage,
      prague,
      applicationMode,
      applicationInterval,
      applicationAmount,
      applicationVolume,
      safetyInterval,
    });
  }

  async index(req, res) {
    const { defensiveId, cultivationId } = req;
    const application = await Application.findAll({
      where: {
        defensiveId,
        cultivationId,
      },
    });
    return res.json(application);
  }
}
export default new ApplicationController();
