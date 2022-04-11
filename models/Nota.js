const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')


const Nota = db.define('Nota', {

    avaliacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },


})

// Criar a tabela no DB
// Nota.sync();

//Primeiro apaga a TB, em seguida cria TB
//Nota.sync({ force: true })


module.exports = Nota