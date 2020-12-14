const yup = require('yup')

const validationSchema = yup.object().shape({

    name: yup.string()
    .required()
    .min(6)
    .max(120),
    crm: yup.string()
    .required()
    .min(9)
    .max(9),
    telephone: yup.string()
    .required()
    .min(14)
    .max(14),
    cellphone: yup.string()
    .required()
    .min(13)
    .max(13),
    cep: yup.string()
    .required()
    .min(9)
    .max(9),
    street: yup.string()
    .required(),
    neighborhood: yup.string()
    .required(),
    city: yup.string()
    .required(),
    state: yup.string()
    .required(),
    specialty: yup.string()
    .required()

})

module.exports = validationSchema