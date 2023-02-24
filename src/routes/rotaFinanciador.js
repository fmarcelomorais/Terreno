const rota = require('express').Router()
const Financiador = require('../controller/Financiador')

rota.post('/cadastrar', Financiador.create)
rota.get('/pagador', Financiador.getAll)


module.exports = rota