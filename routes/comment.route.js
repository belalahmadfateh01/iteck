import * as commentController from '../controllers/comment.controller.js';

import { Router } from 'express';
const nestedRoute = Router({mergeParams: true});
const globalRoute = Router();


nestedRoute.get('/', commentController.getAllComment);
nestedRoute.post('/', commentController.addComment);
nestedRoute.get('/:id', commentController.getComment);

export { nestedRoute, globalRoute };