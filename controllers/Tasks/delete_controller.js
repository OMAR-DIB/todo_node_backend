const Task = require('../../models/task.modules.js');

// delete task by id
const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({message: 'Task deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    deleteTaskById,
};