//EXPRESS
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({path: 'config.env'})

const PORT = process.env.PORT || 8081

app.use('/assets', express.static(__dirname + '/assets'))

//View engine
app.set('view engine', 'ejs')

//BODYPARSER
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Load routes
app.use('/', require('./server/routes/router'))

//------------------------------
app.listen(PORT, ()=>{ console.log(`Servidor rodando na porta http://localhost:${PORT}`) } )