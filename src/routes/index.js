import { Router } from 'express';
import rateRouter from './rateRouter';

const router = Router();

router.use('/rate', rateRouter);

/**
 * Load root router and the 404 response
 * @param {Object} app
 */
const loadRoutes = (app) => {
  app.use('', router);

  app.all('/*', (req, res) => {
    res.status(404);
    res.end();
  });
};

export default loadRoutes;
