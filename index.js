const express = require("express");
const app = express();
const cors = require("cors");
const puert = 2006;


const { getSuperHeroes, getSuperHeroeById} = require ("./controllers/superheroes.controllers")



app.use(cors());

app.get("/",getSuperHeroes);

app.get("/:id", getSuperHeroeById);





app.listen(puert,()=>{
    console.log(`servidor arriba en el puerto ${puert}`);
    console.log("buen trabajo");

})


