const Financiamento = require('../model/financiamento')

class FinanciamentoController {

    static async create(req, res){
        const {objeto, valorTotal, saldo, status} = req.body

        const financiamento = new Financiamento({
            objeto, valorTotal, saldo, status
        })

        try {
            await financiamento.save(financiamento)
            res.status(201).json(financiamento) 
        } catch (error) {
            res.status(400).json({message: error.message})  
        }
    }

    static async getAll(req, res){
        try {
            const financiamento = await Financiamento.find()
            const financiado = financiamento.map(f => {
                return {
                    id: f._id,
                    valorTotal: f.valorTotal
                }
            })
            res.render('financiado', {financiado})
            console.log({financiado})
            //res.status(200).json(financiamento)
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }
    }
}

module.exports = FinanciamentoController