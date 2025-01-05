const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById } = require('../controllers/Tasks/get_controller.js');// productController.getTaskById
const { updateTaskById } = require('../controllers/Tasks/put_controller.js');
const { createTask } = require('../controllers/Tasks/post_controller.js');
const { deleteTaskById } = require('../controllers/Tasks/delete_controller.js');
const { addUser } = require('../controllers/auth/post_register.js');
const { loginUser } = require('../controllers/auth/post_login.js');
const auth = require('../middleware/auth.js');

//////////////////////////////
//////  Task Routes  /////////
//////////////////////////////
// get all tasks
router.get('/tasks/', auth, getAllTasks);

// get task by id
router.get('/tasks/:id', auth ,getTaskById);

// create tasks
router.post('/tasks/',auth, createTask);

// update task by specific id
router.put('/tasks/:id',auth, updateTaskById);

// delete task by specific id
router.delete('/tasks/:id',auth, deleteTaskById);



//////////////////////////////
//////  User Routes  /////////
//////////////////////////////
router.post('/users/register', addUser);

router.post('/users/login', loginUser);

module.exports = router;