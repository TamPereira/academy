const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')


const Turma = db.define('Turma', {

    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
})

// Criar a tabela no DB //verificar
   // User.sync();

//Primeiro apaga a TB, em seguida cria TB
    //User.sync({ force: true })

module.exports = User