
//           ¿Lo que esta comentado hace falta? - Yo pienso que se necesita para poder leer el archivo science.json con toda la lista de personajes.
//const fs = require('fs');

const express = require('express');

const app = express();

//const listaHeroesJSON = require('./science');
//const listaHeroes = readFileSync.listaHeroesJSON ;

const homeRutes = require('./routes/home');
const heroesRutes = require('./routes/heroes');
const creditosRutes = require('./routes/creditos')

//====================================================================
//=================== RUTAS NAVEGADOR ================================

app.listen(3000, function () { console.log('Servidor en :3000') });

app.use('/', homeRutes);

app.use('/heroes', heroesRutes);

app.use('/creditos', creditosRutes);



