const server = require('../../app')
require('dotenv').config()

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Conectado na porta ${PORT}`))

module.exports = server;
