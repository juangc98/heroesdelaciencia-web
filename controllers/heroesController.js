const fs = require('fs');
const listaHeroesJSON = fs.readFileSync('science.json');
const listaHeroes = JSON.parse(listaHeroesJSON);

console.log(listaHeroesJSON);

const heroesController = {
    index: function(req, res){
        res.send('Contenido arch.JSON')
    },

    //Mostrar id en detalle
    /*show: function (){

    },

    //Eliminar
    delete: function(){

    }
    */

}

module.exports = heroesController ;