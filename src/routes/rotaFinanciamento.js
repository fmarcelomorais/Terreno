const rota = require('express').Router()
const Financiamento = require('../controller/Financiamento')

rota.post('/cadastrar', Financiamento.create)
rota.get('/financiado', Financiamento.getAll)
rota.patch('/alterar/:_id')
rota.delete('/deletar/:_id')

module.exports = rota