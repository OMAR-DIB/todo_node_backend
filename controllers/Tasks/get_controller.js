const Task = require('../../models/task.modules.js');

// get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get task by id
const getTaskById = async (req, res) => {
    try {

        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    getAllTasks,
    getTaskById,
};