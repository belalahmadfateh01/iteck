import * as userController from "../controllers/user.controller.js";

import express from 'express';
const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/add', userController.addUser);
router.get('/:id', userController.getUser);

export default router;