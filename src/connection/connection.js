const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const banco = process.env.DB_BANCO
const conector = `mongodb+srv://${user}:${password}@${banco}/?retryWrites=true&w=majority`

async function conect(){
    mongoose.set('strictQuery', false);   
    await mongoose.connect(conector) 
    console.log('Conectado ao banco de dados')

}
conect().catch(error => console.log('Não conectado', error))  

module.exports = mongoose