const rota = require("express").Router()
const index = require('../controller/Index')
rota.get('/', index)

module.exports = rota