import * as teamController from '../controllers/team.controller.js';

import { Router } from 'express';
const router = Router();

router.route('/').get(teamController.getAllTeam).post(teamController.addTeam);
router.get('/:id', teamController.getTeam);
router.get('/:id/members/', teamController.getTeamMembers)
router.post('/members', teamController.addTeamMember);

export default router;