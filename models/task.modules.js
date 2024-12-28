const mongoose =  require('mongoose');
const User = require('./user.modules');

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Title is required'],
    },
    description :{
        type : String,
        required : false,
    },
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true, 'User is required'],
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;