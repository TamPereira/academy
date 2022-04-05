const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('academy', 'root', '04021987', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado via ORM Sequelize.')
} catch (err) {
    console.log('A ORM não se conectou:', err)
}

// Criar a tabela no DB
//User.sync();
//.sync({force:true})
module.exports = sequelize;