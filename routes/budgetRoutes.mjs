import express from 'express';
import * as controller from '../controllers/budgetController.mjs';
import { authMiddleware } from '../middleware/authorizationMW.mjs';

const router = express.Router();

router.use(authMiddleware);

router.post('/', controller.create);
router.get('/', controller.getAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;