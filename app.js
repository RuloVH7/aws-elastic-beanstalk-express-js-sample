const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Ya lo había hecho con las GitHub Pages. Ahora solo está en la nube, lo cuál está chido, creo que la forma en la que tengo mi portafolio bien podría ser esto'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
