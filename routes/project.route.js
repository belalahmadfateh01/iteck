import * as projectController from '../controllers/project.controller.js';

import { Router } from 'express';
const router = Router();

router.route('/')
    .get(projectController.getAllProject)
    .post(projectController.addProject);
    
router.get('/:id', projectController.getProject);

export default router;