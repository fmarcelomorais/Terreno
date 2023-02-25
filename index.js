//const server = require('./src/server/server');
const server = require('./src/app/app')


const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))

//module.exports = server;