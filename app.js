import express from 'express';

import userRoutes from './routes/user.route.js'
import { globalRoute as commentRoutes } from './routes/comment.route.js';
import serviceRoutes from './routes/service.route.js';
import projectRoutes from './routes/project.route.js';
import teamRoute from './routes/team.route.js';


const app = express();

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/teams', teamRoute);

export default app;