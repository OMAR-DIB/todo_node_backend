const express = require('express');
const router = express.Router();
const {getAllTasks,getTaskById} = require('../controllers/get_controller.js');// productController.getTaskById
const {updateTaskById} = require('../controllers/put_controller.js');
const {createTask} = require('../controllers/post_controller.js'); 
const {deleteTaskById} = require('../controllers/delete_controller.js');

// get all tasks
router.get('/', getAllTasks);

// get task by id
router.get(':/id',getTaskById);

// create tasks
router.post('/', createTask);

// update task by specific id
router.put('/:id', updateTaskById);

// delete task by specific id
router.delete('/:id', deleteTaskById);

module.exports = router;