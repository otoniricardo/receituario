import { Router } from 'express';

import CultivationController from './app/controllers/Cultivation';
import DefensiveTypeController from './app/controllers/DefensiveType';
import DefensiveController from './app/controllers/Defensive';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use(authMiddleware);

routes.post('/cultivations', CultivationController.store);
routes.get('/cultivations', CultivationController.index);

routes.post('/defensivetypes', DefensiveTypeController.store);
routes.get('/defensivetypes', DefensiveTypeController.index);

routes.post('/defensives', DefensiveController.store);
routes.get('/defensives', DefensiveController.index);

export default routes;
