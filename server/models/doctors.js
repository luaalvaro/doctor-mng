const dbConnection = require('../database/dbConnection')

const Doctor = dbConnection.sequelize.define('tb_doctors', {
    name: {
        type: dbConnection.Sequelize.STRING(120),
        allowNull: false
    },
    crm: {
        type: dbConnection.Sequelize.STRING(9),
        allowNull: false,
        unique: true
    },
    telephone: {
        type: dbConnection.Sequelize.STRING(14),
        allowNull: false
    },
    cellphone: {
        type: dbConnection.Sequelize.STRING(14),
        allowNull: false
    },
    cep: {
        type: dbConnection.Sequelize.STRING(10),
        allowNull: false
    },
    street: {
        type: dbConnection.Sequelize.STRING(70),
    },
    neighborhood: {
        type: dbConnection.Sequelize.STRING(70),
    },
    city: {
        type: dbConnection.Sequelize.STRING(70),
    },
    state: {
        type: dbConnection.Sequelize.STRING(70),
    },
    specialty: {
        type: dbConnection.Sequelize.STRING,
        allowNull: false
    },
    deletedAt: dbConnection.Sequelize.DATE
})

//Doctor.sync({force:true})

module.exports = Doctor