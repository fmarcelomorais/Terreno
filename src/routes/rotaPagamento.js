const rota = require('express').Router()
const Pagamento = require('../controller/Pagamento')

rota.get('/pagar', Pagamento.pagar)
rota.post('/create', Pagamento.create)
rota.get('/', Pagamento.getAll)
rota.post('/delete', Pagamento.cancelar)

module.exports = rota