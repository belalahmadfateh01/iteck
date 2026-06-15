import * as userService from '../services/user.service.js';

const addUser = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            job,
            role
        } = req.body;

        if (!first_name || !last_name || !role) {
            return res.status(400).json({
                status: 'failed',
                message: 'first name, last name and role are required'
            });
        }

        const userId = await userService.addUser({
            first_name,
            last_name,
            job,
            role
        });

        return res.status(201).json({
            status: 'success',
            data: {
                id: userId
            }
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            status: 'failed',
            message: err.message || 'error in adding user'
        });
    }
};

const getUser = async(req, res) => {
    try {

        const id = req.params.id;

        if(!id) return res.status(400).json({
            status: 'failed',
            message: 'id is required as params'
        });

        const result = await userService.getUser(id);
        
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: 'error in getting user'
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: 'error in getting all users'
        });
    }
}

export { addUser, getUser, getAllUsers };