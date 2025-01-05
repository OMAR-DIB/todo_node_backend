const jwt = require('jsonwebtoken');
const User = require('../../models/user.modules.js');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    loginUser,
};