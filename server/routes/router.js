const express = require('express')
const Doctor = require('../../server/models/doctors') //Model de médicos
const Specialty = require('../../server/models/specialtys') //Model de médicos
const { Sequelize } = require('../database/dbConnection')
const route = express.Router()

const Op = Sequelize.Op
  

//ROTAS

//MOSTRAR TODOS OS DADOS DO MYSQL
route.get('/', (req, res)=>{

    Doctor.findAll({
        where: {
            deletedAt: null

        }
    }).then((response)=>{
        res.render('index', {doctors: response})
    })

})

//MOSTRAR TODOS OS DADOS DO MYSQL
route.get('/search', (req, res)=>{

        Doctor.findAll({
            where: {
                deletedAt: null,
                [Op.or]: [
                    { name: { [Op.like]: '%' + req.query.search + '%' } },
                    { crm: { [Op.like]: '%' + req.query.search + '%' } },
                    { telephone: { [Op.like]: '%' + req.query.search + '%' } },
                    { cellphone: { [Op.like]: '%' + req.query.search + '%' } },
                    { cep: { [Op.like]: '%' + req.query.search + '%' } },
                    { specialty: { [Op.like]: '%' + req.query.search + '%' } },

                ]

            }
        }).then((response)=>{
            res.render('index', {doctors: response})
        })
   
})

//PEGAR OS VALORES DO ID PARA PODER MOSTRAR NA ROTA UPDATE
route.get('/update', (req, res)=>{

    let list =  Specialty.findAll({})
    .then((response)=>{
        
        list = response
    })

    Doctor.findAll({
        where: {
            id: req.query.id
        }
    }).then((response)=>{
        res.render('update', {doctors: response, specialtys:  list })
    })
})

//CHAMAR A PAGINA DE FORM CADASTRO
route.get('/add', (req, res)=>{

    Specialty.findAll({})
    .then((response)=>{
        console.log({specialtys: response.tb_specialties})
        res.render('add', {specialtys: response})
    })
   
})

//CADASTRAR AS INFORMAÇÕES NO BANCO DE DADOS
route.post('/add', (req, res)=>{

    Doctor.create({
        name: req.body.name,
        crm: req.body.crm,
        telephone: req.body.telephone,
        cellphone: req.body.cellphone,
        cep: req.body.cep,
        street: req.body.street,
        neighborhood: req.body.neighborhood,
        city: req.body.city,
        state: req.body.state,
        specialty: req.body.specialty
    }).then(()=>{
        Doctor.findAll({
            where: {
                deletedAt: null
            }
        }).then((response)=>{
            res.render('index', {doctors: response})
        })
    }).catch((error)=>{
        res.json({
            sucess: false,
            error: error
        })
    })
})

//MODIFICAR AS INFORMAÇÕES DO BANCO DE DADOS
route.post('/update', (req, res)=>{
    Doctor.update({
        name: req.body.name,
        crm: req.body.crm,
        telephone: req.body.telephone,
        cellphone: req.body.cellphone,
        cep: req.body.cep,
        street: req.body.street,
        neighborhood: req.body.neighborhood,
        city: req.body.city,
        state: req.body.state,
        specialty: req.body.specialty
    },{
        where: {
            id: req.body.id
        }
    }).then((response)=>{
        
        Doctor.findAll({
            where: {
                id: req.query.id
            }
        }).then((response)=>{
            res.render('update', {doctors: response, sucess: true})
        })

    }).catch((error)=>{
        res.render('update', {doctors: response, sucess: false})
    })
})

//SOFT DELETE NO REGISTRO DO BANCO DE DADOS
route.get('/delete', (req,res)=>{
    const id = req.query.id

    Doctor.update({deletedAt: Date()}, {
        where: {
            id: id
        }
    }).then(()=>{
        Doctor.findAll({
            where: {
                deletedAt: null
            }
        }).then((response)=>{
            res.render('index', {doctors: response})
        })
    }).catch((error)=>{
        Doctor.findAll({
            where: {
                deletedAt: null
            }
        }).then((response)=>{
            res.render('index', {doctors: response})
        })
    })

})

module.exports = route