const Task = require('../../models/task.modules.js');

const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!task){
            return res.status(404).json({ error: 'Task not found' });
        }
        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateTaskById,
};