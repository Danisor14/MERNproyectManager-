const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {

    //revisa si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        // revisar si el usuario esta registrado
        let user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({msg: 'User not found'})
        }

        // revisar password
        const correctPassword = await bcrypt.compare(password, user.password);
        if(!correctPassword){
            return res.status(400).json({msg: 'Incorrect password'})
        }

        //crear y firmar el jwt
        const payload = {
            user: {
                id: user.id
            }
        };

        // una vez confirmado email y password se firma el jwt
        jwt.sign(payload, process.env.SECRET, { 
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

             //Mensaje de confirmacion 
            res.json({ token }); 
        });


    } catch (error) {
        console.log(error);
    }
}