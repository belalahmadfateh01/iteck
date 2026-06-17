import * as teamService from '../services/team.service.js';
import { getUser } from '../services/user.service.js';

const getAllTeam = async (req, res) => {
    try {
        const result = await teamService.getAllTeam();
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting teams'
        });
    }
}

const getTeam = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) return res.status(400).json({
            status: 'failed',
            message: 'id not provided in params'
        });

        const result = await teamService.getTeam(id);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting team'
        });
    }
}

const getTeamMembers = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) return res.status(400).json({
            status: 'failed',
            message: 'id not provided in params'
        });

        const result = await teamService.getTeamMembers(id);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in getting team members'
        });
    }
}

const addTeam = async (req, res) => {
    try {
        const { name, description } = req.body;
        if(!name || !description) return res.status(400).json({
            status: 'failed',
            message: 'name and description are required'
        });

        const result = await teamService.addTeam({name, description});
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
            message: err.message || 'Error in adding team'
        });
    }
}

const addTeamMember = async (req, res) => {
    try {
        const { userId, teamId } = req.body;
        if(!userId || !teamId) return res.status(400).json({
            status: 'failed',
            message: 'user id or team id missing'
        });

        const userExist = await getUser(userId);
        if(!userExist) return res.status(404).json({
            status: 'failed',
            message: 'No user found with id'
        });

        const teamExist = await teamService.getTeam(teamId);
        if(!teamExist) return res.status(404).json({
            status: 'failed',
            message: 'No team found with this id'
        });

        const result = await teamService.addTeamMember(userId, teamId);
        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'failed',
            message: err.message || 'Error in adding team member'
        });
    }
}

export { getAllTeam, getTeam, getTeamMembers, addTeam, addTeamMember }