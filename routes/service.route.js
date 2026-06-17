import * as serviceController from '../controllers/service.controller.js';

import { Router } from 'express';
const router = Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getService);
router.post('/', serviceController.addService);

export default router;