const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {    

    //revisa si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        // revisar que el ususario registrado sea unico
        let user = await User.findOne({ email });
        
        if(user) {
            return res.status(400).json({ msg: 'User already exists'});
        }

        // crea el nuevo usuario
        user = new User(req.body);

        //hashear el password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //guardar ususario 
        await user.save();

        //crear y firmar el jwt
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, { 
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

             //Mensaje de confirmacion 
            res.json({ token }); 
        });


        /* //Mensaje de confirmacion 
        res.json({ msg:('User was created correctly')}); */


    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
    
}