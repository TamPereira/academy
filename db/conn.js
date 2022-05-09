const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('academy', 'root', 'senha do mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado via ORM Sequelize.')
} catch (err) {
    console.log('A ORM não se conectou:', err)
}


module.exports = sequelize;