const express = require('express'); // importar express
const conectDB = require('./config/db');

//crear el servidor 
const app = express();

//conectar a la base de datos
conectDB();

//habilitar express.json
app.use(express.json({extended: true}));

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

//arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})
