const { Schema } = require('mongoose')
const {mongoose} = require('../connection/connection')


const Financiador = mongoose.model('Financiador',
    new Schema({
        nome:{
            type: String,
            required: true
        },
        valor:{
            type: Number
        }
    })
)

module.exports = Financiador;