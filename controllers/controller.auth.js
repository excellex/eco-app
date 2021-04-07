const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = 10;

module.exports.signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const candidate = await User.findOne({ username });
    if (candidate) {
      return res.status(400).json({ message: `A user with username ${username} already exist` })
    };

    const user = new User({
      username,
      password: bcrypt.hashSync(password, saltRounds)
    });
    user.save();
    res.json({ message: 'User has been created', success: true })
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}
