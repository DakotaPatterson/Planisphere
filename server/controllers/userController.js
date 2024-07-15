const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateUserProfile = async (req, res) => {
  const { name, email } = req.body;

  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;

  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userFields },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
