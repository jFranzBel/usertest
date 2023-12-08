const { User } = require('../config/db');
const bcrypt = require('bcrypt');

// Create a new user with hashed password
const createUser = async (req, res) => {
     const { username, email, password, type } = req.body;
     try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User.create({
               username,
               email,
               password: hashedPassword,
          });
          return res.status(201).json(user);
     } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
};

// Get all users
const getAllUsers = async (_, res) => {
     try {
          const users = await User.findAll({ where: { state: true } });
          return res.status(200).json(users);
     } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
};

// Get user by ID
const getUserById = async (req, res) => {
     const { id } = req.params;
     try {
          const user = await User.findByPk(id);
          if (!user || !user.state) {
               return res.status(404).json({ error: 'User not found' });
          }
          return res.status(200).json(user);
     } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
};

// Update user by ID 
const updateUserById = async (req, res) => {
     const { id } = req.params;
     try {
          const user = await User.findByPk(id);
          if (!user || !user.state) {
               return res.status(404).json({ error: 'User not found' });
          }
          await User.update(req.body, { where: { id } });
          const updatedUser = await User.findByPk(id);
          return res.status(200).json(updatedUser);
     } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
};

// Delete user by ID (Logic Deletion)
const deleteUserById = async (req, res) => {
     const { id } = req.params;
     try {
          const user = await User.findByPk(id);
          if (!user || !user.state) {
               return res.status(404).json({ error: 'User not found' });
          }
          await User.update({ state: false }, { where: { id } });
          return res.status(200).json({ message: 'User deleted successfully' });
     } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
     }
};

module.exports = {
     createUser,
     getAllUsers,
     getUserById,
     updateUserById,
     deleteUserById,
};
