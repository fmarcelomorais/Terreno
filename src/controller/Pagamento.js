const Pagamento = require('../model/pagamento');
const Financiamento = require('../model/financiamento');
const Financiador = require('../model/financiador');
const { MAIN_DIR } = require('../helpers/constants');

class PagamentoController {
    
    static async create(req, res){
        const {dataPagamento, pagador,  valorPago, status} = req.body;

        const pagamento = new Pagamento({
            data: dataPagamento,
            valorPago: valorPago,
            pagador: await Financiador.findById(pagador),
            status: true
        }); 
      
        const financiamento = await Financiamento.findById('63d6d96657a24e920fcddf78'); //Financiamento
        const financiador = await Financiador.findById(pagador);
        
        //const novoValor = financiamento.valorTotal - Number(valorPago);
        const novoStatus = financiamento.valorTotal < 1 ? true : false;

        //financiamento.valorTotal = novoValor;
        financiamento.saldo += Number(valorPago) 
        financiamento.status = novoStatus;


        const novoValorFinanciado = financiador.valor - Number(valorPago);
        financiador.valor = novoValorFinanciado;
        const statusPag = pagamento.status;
   
        try {
            await pagamento.save(pagamento);            
            await financiamento.save();
            await financiador.save();
            res.render('pagar', {layout: MAIN_DIR, title: "Pagar",  statusPag})                   
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }
    }   

    static async getAll(req, res){
        const pagamentos = await Pagamento.find()
        const formatter = new Intl.DateTimeFormat('pt-BR'); 
        let arrPagamentos = pagamentos.map((pag, i) => {
            return {
                uid: pag._id,
                id: ++i,
                data: formatter.format(pag.data),
                valorPago: pag.valorPago,
                pagador: pag.pagador,
                status: pag.status

            }
        })
        arrPagamentos.sort((a, b) => a - b)
        res.render('pagamentos', {layout: MAIN_DIR, title: "Pagamentos", arrPagamentos})
        //res.status(200).json(pagamentos)   
    }

    static async cancelar(req, res){
        const {uid, valorPago, idPagador} = req.body; 
        const financiamento = await Financiamento.findById('63d6d96657a24e920fcddf78'); 
        const financiador = await Financiador.findById(idPagador)
        const novoValorFinanciador = financiador.valor + Number(valorPago)
        const novoSaldo = financiamento.saldo - Number(valorPago)

        financiamento.saldo = novoSaldo
        financiador.valor = novoValorFinanciador
        try {           
            await financiamento.save();
            await financiador.save();
            await Pagamento.findByIdAndDelete(uid)            
            res.redirect('/pagamento')                  
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }   
    }

    static async pagar(req, res){
        const financiador = await Financiador.find();                               
            const pagador = financiador.map(f => {
                return {
                    id: f._id,
                    nome: f.nome,                    
                }
            })
        res.render('pagar',  {layout: MAIN_DIR, title: "Pagar", pagador})
    }
}



module.exports = PagamentoController