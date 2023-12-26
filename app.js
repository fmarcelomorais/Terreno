const express = require('express');
const path = require('path')
const {conect} = require('./src/connection/connection')
const exphbs = require("express-handlebars");
const cors = require("cors")
const app = express()
//const { PARTIALS_DIR, LAYOUTS_DIR, VIEWS_DIR } = require("./src/helpers/constants");

const {init: handlebars} = require('./src/helpers/handlebars')
handlebars(app);
app.set('views', require('path').resolve(__dirname, 'src/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.resolve(__dirname, 'assets'))); // arquivos staticos
app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'access-control-allow-origin'],
        credentials: true,
        optionsSuccessStatus: 200,
        maxAge: 86400
    }))

// Rotas da api
const rotaInicial = require('./src/routes/rotaInicial')
const rotaFinanciamento = require('./src/routes/rotaFinanciamento')
const rotaPagamento = require('./src/routes/rotaPagamento')
const rotaPagador = require('./src/routes/rotaFinanciador')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Chamada das rotas
app.use('/', rotaInicial)
app.use('/financiamento', rotaFinanciamento)
app.use('/pagamento', rotaPagamento)
app.use('/financiador', rotaPagador)


module.exports = app;
