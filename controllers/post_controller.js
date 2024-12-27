const Task = require('../models/task.modules.js');

// create tasks
const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask,
};