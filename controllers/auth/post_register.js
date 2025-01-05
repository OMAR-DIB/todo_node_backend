const User = require('../../models/user.modules.js');

const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {

        const user = new User({ username,email ,  password });
        await user.save();
        res.status(201).json({ msg: 'User registered' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addUser,
};