import { Router } from 'express';

import CultivationController from './app/controllers/Cultivation';
import DefensiveTypeController from './app/controllers/DefensiveType';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use(authMiddleware);

routes.post('/cultivations', CultivationController.store);
routes.get('/cultivations', CultivationController.index);

routes.post('/defensivestypes', DefensiveTypeController.store);
routes.get('/defensivestypes', DefensiveTypeController.index);

export default routes;
