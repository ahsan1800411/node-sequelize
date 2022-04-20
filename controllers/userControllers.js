const { User } = require('../models');

// create a user;

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, user });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(201).json({ success: true, users });
};

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: { id },
  });
  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }
  return res.status(201).json({ success: true, user });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: { id },
  });
  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }

  const userUpdated = await User.update(req.body, {
    where: { id },
  });

  res.status(201).json({ success: true, userUpdated });
};

// exports.updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, role, name } = req.body;
//     const user = await User.findOne({
//       where: { id },
//     });
//     if (!user) {
//       return res.status(400).json({ msg: 'User not found' });
//     }
//     user.name = name;
//     user.email = email;
//     user.role = role;

//     await user.save();
//     res.status(201).json({ success: true, user });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    //   await User.destroy({where:{id}})
    await user.destroy();

    res.status(201).json({ success: true, msg: 'deleted ' });
  } catch (error) {
    res.status(400).json(error);
  }
};
