import * as projectService from '../services/project.service.js';

const getAllProject = async (req, res) => {
    try {
        const restul = await projectService.getAllProject();
        res.status(200).json({
            status: 'success',
            data: restul
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting projects'
        });
    }
}

const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) return res.status(400).json({
            status: 'failed',
            message: 'id not provided as params'
        });

        const result = await projectService.getProject(id);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting project'
        });
    }
}

const addProject = async (req, res) => {
    try {
        const { name, technology_type, description, tag } = req.body;
        if(!name || !technology_type || !description || !tag) return res.status(400).json({
            status: 'failed',
            message: 'name, technology type, description and tag are required'
        });

        const result = await projectService.addProject({name, technology_type, description, tag});

        res.status(201).json({
            status: 'success',
            data: {
                id: result
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in creating project'
        });
    }
}

export { getAllProject, getProject, addProject }