const Pagamento = require('../model/pagamento');
const Financiamento = require('../model/financiamento');
const Financiador = require('../model/financiador');
const { MAIN_DIR } = require('../helpers/constants');

const index = async function(req, res){
    const financiamento = await Financiamento.findById('63d6d96657a24e920fcddf78'); //Financiamento
    const financiador = await Financiador.find();
    const dadosFinanciamento = {
        objeto: financiamento.objeto,
        total: financiamento.valorTotal,
        financiadores:[financiador[0].nome, financiador[1].nome],
        saldo: financiamento.saldo
    }    
    console.log(dadosFinanciamento)
    res.render('home', {layout: MAIN_DIR, title: "Home", dadosFinanciamento})
}

module.exports = index;