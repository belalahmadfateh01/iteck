import * as commentService from '../services/comment.service.js';
import { getUser } from '../services/user.service.js';
import { getService } from '../services/service.service.js';

const addComment = async (req, res) => {
    try {
        const { userId } = req.params;
        if(!userId) return res.status(400).json({
            status: 'failed',
            message: 'user id not provided in params'
        });

        const { message, rating, service_id } = req.body;
        if(!message || !rating || !service_id) return res.status(400).json({
            status: 'failed',
            message: 'message, rating and service are required'
        });

        const userExist = await getUser(userId);
        if(!userExist) return res.status(404).json({
            status: 'failed',
            message: 'No user found with this id'
        });

        const serviceExist = await getService(service_id);
        if(!serviceExist) return res.status(404).json({
            status: 'failed',
            message: 'No service found with this id'
        });

        const resutl = await commentService.addComment({message, rating, user_id:userId, service_id});

        res.status(201).json({
            status: 'success',
            data: {
                id: resutl
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in adding comment'
        });
    }
}

const getComment = async (req, res) => {
    try {
        const { userId, id } = req.params;
        if(!id || !userId) return req.status(400).json({
            status: 'failed',
            message: 'id and user id should provide as params'
        });

        const userExist = await getUser(userId);
        if(!userExist) return res.status(404).json({
            status: 'failed',
            message: 'No user found with thi id'
        });

        const result = await commentService.getComment(userId, id);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting comment'
        });
    }
}

const getAllComment = async (req, res) => {
    try {
        const { userId } = req.params;
        if(!userId) return res.status(400).json({
            status: 'failed',
            message: 'user id is not provided in params'
        });

        const result = await commentService.getAllComment(userId);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        req.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting messages'
        });
    }
}

export { addComment, getComment, getAllComment }