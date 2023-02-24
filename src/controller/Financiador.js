const { MAIN_DIR } = require('../helpers/constants')
const Financiador = require('../model/financiador')

class FinanciadorController {
    
    static async create(req, res){
        const {nome, valor} = req.body

        const financiador = new Financiador({
            nome, valor
        })
        try {
            await financiador.save(financiador)    
            res.status(201).json(financiador)        
        } catch (error) {
            res.status(400).json({message: error.message})
        }

    }

    static async getAll(req, res){
        try {
            const financiador = await Financiador.find();                               
            const pagador = financiador.map(f => {
                return {
                    id: f._id,
                    nome: f.nome,
                    valor: f.valor
                }
            })
            res.render('financiador', {layout: MAIN_DIR, title: "Pagadores", pagador})
            //res.status(200).json(financiador)
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }
    }
}


module.exports = FinanciadorController