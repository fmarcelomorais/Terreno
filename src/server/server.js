const server = require('../app/app')


const port = 5001;
server.listen(port, ()=> console.log(`Conectado na porta ${port}`))

module.exports = server;