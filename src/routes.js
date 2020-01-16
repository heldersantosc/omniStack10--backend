const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();


/* Métodos HTTP */

//get, post, put, delete


/** Tipo de Parâmetros */

// Query Params: request.query(filtros, ordenação, paginação, ....)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro )

/** MONGO DB - (banco de dados não relacional)*/


/* DELETE */
routes.delete('/:id', (request, response) => {
    console.log(request.params)
    return response.json({ message: "Oi tudo bem" })
})

/* GET */
routes.get('/devs', DevController.index) //-> lista todos os devs
routes.get('/search', SearchController.index) // -> pesquisar devs

/* POST */
routes.post('/devs', DevController.store ) // ->insere dev no banco

module.exports = routes;