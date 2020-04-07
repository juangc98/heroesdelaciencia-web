
const heroes = require('./science.json');

//console.log(heroes);

const heroesController = {
    index: function(req, res){
        res.send(heroes)
    },

    //Mostrar id en detalle
    show: function (req, res){
        let heroeActual
        let heroesId = req.params.id ;
        if (heroesId < 1 || heroesId > 10){
            res.send("No existe dicho heroe.")
        } else {
               for(heroe of heroes) {
                    if (heroe.id == heroesId){
                     heroeActual = heroe
                     res.send("Hola, mi nombre es " + heroeActual.nombre + " y soy " + heroeActual.profesion)  
                }
            }
        }
    },
/*
    //Eliminar
    delete: function(){

    }
    */

}

module.exports = heroesController ;