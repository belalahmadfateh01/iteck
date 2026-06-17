import * as userController from "../controllers/user.controller.js";
import { nestedRoute as commentRoutes } from "./comment.route.js";

import { Router } from 'express';
const router = Router();

router.get('/', userController.getAllUsers);
router.post('/add', userController.addUser);
router.get('/:id', userController.getUser);

router.use('/:userId/comments', commentRoutes)

export default router;