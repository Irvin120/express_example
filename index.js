//Creacion del servidor
const express = require('express');
const routerApi = require('./router');

const app = express();
const port = 3000;

app.use(express.json());

//Definicion  de rutas
app.get('/', (req, res) => {
  res.send('Hello word');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  // console.log('Mi port' + port);
});
