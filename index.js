// connect to MongoDB
const mongoose = require('mongoose');
// connect to express
const express = require('express');
const app = express();
// import modules
const Task = require('./models/task.modules.js');
// import product routes
const routes = require('./routes/task_route.js');

// middlware to enable json - urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// use routes
app.use('/api/',routes);

app.get('/', (req, res) => {
    res.send('Hello Wfedffggf orld');
});


// connect to db then listen to port
mongoose.connect('mongodb+srv://odib:ARKlIJ3HpVumIyc9@cluster0.r1418.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log(`Example app listening on port 3000 `);
        });
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });







//     // create tasks
// app.post('/api/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.create(req.body);
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // get all tasks
// app.get('/api/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find();
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // get task by specific id
// app.get('/api/tasks/:id', async (req, res) => {
//     try {

//         const { id } = req.params;
//         const task = await Task.findById(id);
//         res.status(200).json(task);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // update task by specific id
// app.put('/api/tasks/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const task = await Task.findByIdAndUpdate(id, req.body);

//         if (!task){
//             return res.status(404).json({ error: 'Task not found' });
//         }
//         const updatedTask = await Task.findById(id);
//         res.status(200).json(updatedTask);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // delete task by specific id
// app.delete('/api/tasks/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const task = await Task.findByIdAndDelete(id);

//         if (!task) {
//             return res.status(404).json({ error: 'Task not found' });
//         }
//         res.status(200).json({message: 'Task deleted successfully'});
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
