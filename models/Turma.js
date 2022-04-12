const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')


const Turma = db.define('Turma', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    professor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },


})

// Criar a tabela no DB //verificar
 Turma.sync();

//Primeiro apaga a TB, em seguida cria TB
//Turma.sync({ force: true })


module.exports = Turma