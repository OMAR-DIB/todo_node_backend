const bcrypt = require('bcrypt');
const User = require('../../models/user.modules.js')

const addUser = async (req,res) => {
    try {
        const {username , email , password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username , email , password: hashedPassword});
        res.status(201).json(user);
        
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: error.message});
    }
}

module.exports = {
    addUser,
};