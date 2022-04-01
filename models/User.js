const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {

    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        
    },

    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    turma_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
})

// Criar a tabela no DB //verificar
   // User.sync();

//Primeiro apaga a TB, em seguida cria TB
    //User.sync({ force: true })

module.exports = User