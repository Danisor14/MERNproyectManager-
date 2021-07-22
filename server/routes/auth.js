// rutas para autenticar usuarios 
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

//crea un usuarios 
// api/users
router.post('/', 
    [
        check('email', 'add a valid email').isEmail(),
        check('password', 'password must be 6 characters').isLength({ min: 6 })
    ],
    authController.authenticateUser
);

module.exports = router;