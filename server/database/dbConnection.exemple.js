//Aqui vai a configuração do banco de dados MYSQL

const Sequelize = require('sequelize')
const sequelize = new Sequelize('DATABASE', 'USER', 'PASSWORD', {
    host: 'HOST',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = {Sequelize, sequelize}