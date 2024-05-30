const {request, response} = require("express");
const{superheroes} = require("../superHeroes");

const getSuperHeroes = (req, res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        superheroes:superheroes
    });
}

const getSuperHeroeById = (req = request, res = response)=>{
    let id = parseInt(req.params.id);

    let superHeroesBuscar = "";

    superHeroesBuscar = superheroes.find((superheroe) =>{
        return superheroe.id === id;
    });

    if(superHeroesBuscar){
        return res.json({
            ok:true,
            statusCode:200,
            superHeroesBuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg: "No hay superheroes con ese id"
        })

    }
    }

    


module.exports = {
    getSuperHeroes,
    getSuperHeroeById
}