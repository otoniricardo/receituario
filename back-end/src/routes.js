import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';

import CultivationController from './app/controllers/Cultivation';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.use(authMiddleware);

routes.put('/cultivations', CultivationController.index);

export default routes;
