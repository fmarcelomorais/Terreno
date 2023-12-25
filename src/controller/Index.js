
const Financiamento = require('../model/financiamento');
const Financiador = require('../model/financiador');
const { MAIN_DIR } = require('../helpers/constants');
require('dotenv').config()

const index = async function(req, res){
    const financiamento = await Financiamento.findById(process.env.FINANCIAMENTO); //Financiamento
    const financiador = await Financiador.find();
    const dadosFinanciamento = {
        objeto: financiamento.objeto,
        total: financiamento.valorTotal,
        financiadores:[financiador[0].nome, financiador[1].nome],
        saldo: financiamento.saldo
    }    
    //console.log(dadosFinanciamento)
    res.render('home', {layout: MAIN_DIR, title: "Home", dadosFinanciamento})
}

module.exports = index;