// controllers/users-controller.js

const User = require('../../models/User');
const DeletedUser = require('../../models/DeletedUser');
const bcrypt = require('bcryptjs');

// GET /api/users
exports.getUsers = async (req, res) => {
  try {
    const users = await User
      .find()
      .select('-password -refreshToken -resetPasswordToken -resetPasswordExpires');
    return res.json({ success: true, data: users });
  } catch (err) {
    console.error('getUsers Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// GET /api/users/:id
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User
      .findById(id)
      .select('-password -refreshToken -resetPasswordToken -resetPasswordExpires');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    return res.json({ success: true, data: user });
  } catch (err) {
    console.error('getUserById Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// PUT /api/users/:id
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };

    // If password is being updated, hash it
    if (update.password) {
      update.password = await bcrypt.hash(update.password, 10);
    }

    const user = await User
      .findByIdAndUpdate(id, update, { new: true })
      .select('-password -refreshToken -resetPasswordToken -resetPasswordExpires');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, data: user });
  } catch (err) {
    console.error('updateUser Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// DELETE /api/users/:id
// “Soft delete”: copy to DeletedUser then remove from User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Archive into DeletedUser
    await DeletedUser.create({
      originalId: user._id,
      data: user.toObject(),
    });

    // Remove from User collection
    await user.deleteOne();

    return res.json({ success: true, message: 'User deleted (archived)' });
  } catch (err) {
    console.error('deleteUser Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
