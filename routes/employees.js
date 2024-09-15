const routes = require('express').Router(); // creamos un router

routes.get('/', (req, res) => res.send({state:"Todo Esta bien"}));
routes.post('/:idD')

module.exports = routes; // exportamos el router