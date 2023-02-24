const mongoose = require('mongoose')

const user = 'marcelomorais'
const password = 'Dinha1409'
const conector = `mongodb+srv://${user}:${password}@terrenodb.hpaqq0v.mongodb.net/?retryWrites=true&w=majority`
async function conect(){
    await mongoose.connect(conector) 
    mongoose.set('strictQuery', false);   
    console.log('Conectado ao banco de dados')

}
conect().catch(error => console.log('Não conectado', error))  

module.exports = mongoose