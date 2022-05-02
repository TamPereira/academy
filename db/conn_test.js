const { Sequelize } = require('sequelize');

// colocar sua senha do SQL para poder criar o banco de dados
const sequelize = new Sequelize('academy', 'root', 'sua senha', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado via ORM Sequelize.')
} catch (err) {
    console.log('A ORM não se conectou:', err)
}

// precisa alterar o nome do arquivo para conn, para não precisar importar novamente //

module.exports = sequelize;