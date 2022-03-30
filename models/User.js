const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
   /* id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },*/
    
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    occupation: {
        type: DataTypes.STRING,
        require: true
    }
})

// Criar a tabela no DB //verificar
    User.sync();

//Primeiro apaga a TB, em seguida cria TB
    //User.sync({ force: true })

module.exports = User