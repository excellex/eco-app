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

module.exports.signIn = async (req, res) => {

  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'There is no such user' })
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(404).json({ message: 'Invalid password' })
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' });
    return res.json({ success: true, token, user: { _id: user._id, username: user.username } })

  } catch (e) {
    res.send({ success: false, message: 'Server error' })
  }
}
