const express = require('express');
const path = require('path')
const {conect} = require('../connection/connection')
const exphbs = require("express-handlebars");
const cors = require("cors")
const app = express()

const {init: handlebars} = require('../helpers/handlebars')
handlebars(app);

app.use(express.static(path.join(__dirname, 'assets'))); // arquivos staticos
app.use(cors())

// Rotas da api
const rotaInicial = require('../routes/rotaInicial')
const rotaFinanciamento = require('../routes/rotaFinanciamento')
const rotaPagamento = require('../routes/rotaPagamento')
const rotaPagador = require('../routes/rotaFinanciador')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Chamada das rotas
app.use('/', rotaInicial)
app.use('/financiamento', rotaFinanciamento)
app.use('/pagamento', rotaPagamento)
app.use('/financiador', rotaPagador)


module.exports = app;