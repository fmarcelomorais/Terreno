const { Schema } = require('mongoose')
const {mongoose} = require('../connection/connection')


const Financiamento = mongoose.model('Financiamento',
    new Schema({
        objeto:{
            type: String,
            required: true
        },
        valorTotal:{
            type: Number,
            required: true
        },
        saldo:{
            type: Number,
            required: true
        },
        status:{
            type: Boolean
        }
    })
)

module.exports = Financiamento;