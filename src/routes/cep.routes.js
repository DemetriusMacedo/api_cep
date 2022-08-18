const {Router} = require('express');

const cepRouter = Router();

cepRouter.get('/', (request, response) => {
    response.send('ok')
});

cepRouter.get('/cep/:codigo', cepController.show)

module.exports = cepRouter;