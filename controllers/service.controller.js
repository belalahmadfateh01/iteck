import * as service from '../services/service.service.js';

const addService = async (req, res) => {
    try {
        const { name, description } = req.body;
        if(!name || !description) return res.status(400).json({
            status: 'failed',
            message: 'name and description are required'
        });

        const result = await service.addService({name, description});
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
            message: err.message || 'Error in adding service'
        });
    }
}

const getService = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) return res.status(400).json({
            status: 'failed',
            message: 'id is required as a params'
        });

        const result = await service.getService(id);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting service'
        });
    }
}

const getAllServices = async (req, res) => {
    try {
        const resutl = await service.getAllServices();
        res.status(200).json({
            status: 'success',
            data: resutl
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting services'
        });
    }
}

export { addService, getService, getAllServices };