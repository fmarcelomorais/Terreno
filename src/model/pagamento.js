const { Schema } = require('mongoose')
const {mongoose} = require('../connection/connection')


const Pagamento = mongoose.model('Pagamento',
    new Schema({
        data:{
            type: Date,
        },
        valorPago:{
            type: Number
        },
        pagador:{
            type: Object
        },
        status:{
            type: Boolean
        }
    })
)

module.exports = Pagamento;