const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const estudiantesRoutes = require('./routes/estudiantes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/estudiantes', estudiantesRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

