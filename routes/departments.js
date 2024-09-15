const routes = require('express').Router(); // creamos un router

const {
    findAll,
    findById,
    save
}  = require('./../controllers/controll-departments');

//routes.get('/', (req, res) => res.send({state:true, data: [{id:1}, {id:2}]}));

routes.get('/', findAll);
routes.get('/:id', findById);
routes.post('/', save);

module.exports = routes; // exportamos el router