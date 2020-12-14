const dbConnection = require('../database/dbConnection')

const Specialty = dbConnection.sequelize.define('tb_specialty', {

    specialty: {
        type: dbConnection.Sequelize.STRING,
        unique: true,
        allowNull: false
    }

})


// Specialty.sync({force:true})


module.exports = Specialty