import { Router } from 'express';
import { monthlyRateValidator } from '../middlewares/validator';
import monthlyRate from '../controllers/monthlyRate';

const rateRouter = Router();

rateRouter.route('/').all(monthlyRateValidator).get(monthlyRate);

export default rateRouter;
