const Task = require('../../models/task.modules.js');

const createTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        // Attach the authenticated user's ID
        const task = new Task({ userId: req.user.id, title });
        await task.save();

        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTask,
};
