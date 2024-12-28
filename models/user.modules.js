const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensure unique emails
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;