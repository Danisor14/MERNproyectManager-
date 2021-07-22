// rutas para crerar usuarios 
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

//crea un usuarios 
// api/users
router.post('/', 
    [
        check('name', 'name is obligatoy').not().isEmpty(),
        check('email', 'add a valid email').isEmail(),
        check('password', 'password must be 6 characters').isLength({ min: 6 })
    ],
    userController.createUser
);

module.exports = router;