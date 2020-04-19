import Cultivation from '../models/Cultivation';

class CultivationController {
  async index(req, res) {
    const cultivations = await Cultivation.findAll();
    return res.json(cultivations);
  }
}
export default new CultivationController();
