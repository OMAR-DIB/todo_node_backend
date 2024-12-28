const jwt = require('jsonwebtoken');
const User = require('../../models/user.modules.js')
const bycrypt = require('bcrypt');

const loginUser = async (req,res) => {
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error: 'User not found'});
        }
        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error: 'Invalid credentials'});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: '1d'});
        res.status(200).json({token});
    }catch
    (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    loginUser,
};

