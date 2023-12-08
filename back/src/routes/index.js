const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/Auth');

// Routes for user operations
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.delete('/users/:id', userController.deleteUserById);
// Route for log in
router.post('/login', authController.loginUser);

module.exports = router;