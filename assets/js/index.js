const { static } = require('express')
const validationSchema = require('../../server/models/types')

function check(){
    let prosseguir = true
    //Validação front end do nome
    if (document.querySelectorAll('input[type="text"]')[0].value.length <= 6){
        document.querySelectorAll('input[type="text"]')[0].classList.add("error")

        document.querySelector(".error-name").innerText = 'Insira nome e sobrenome'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[0].classList.remove("error")

        document.querySelector(".error-name").innerText = ''
    }
    //Validação front end do crm
    if (document.querySelectorAll('input[type="text"]')[1].value.length != 9){
        document.querySelectorAll('input[type="text"]')[1].classList.add("error")

        document.querySelector(".error-crm").innerText = 'Crm precisa estar no padrão 00.000.00'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[1].classList.remove("error")

        document.querySelector(".error-crm").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[2].value.length != 13){
        document.querySelectorAll('input[type="text"]')[2].classList.add("error")

        document.querySelector(".error-telephone").innerText = 'Telefone precisa estar no padrão (11)3003-5005'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[2].classList.remove("error")

        document.querySelector(".error-telephone").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[3].value.length != 14){
        document.querySelectorAll('input[type="text"]')[3].classList.add("error")
      
        document.querySelector(".error-cellphone").innerText = 'Celular precisa estar no padrao (11)98178-2285'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[3].classList.remove("error")

        document.querySelector(".error-cellphone").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[4].value.length != 9){
        document.querySelectorAll('input[type="text"]')[4].classList.add("error")
     
        document.querySelector(".error-cep").innerText = 'CEP precisa estar no padrão 00000-000'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[4].classList.remove("error")

        document.querySelector(".error-cep").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[5].value.length <= 6){
        document.querySelectorAll('input[type="text"]')[5].classList.add("error")
        
        document.querySelector(".error-street").innerText = 'Insira nome completo da rua'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[5].classList.remove("error")

        document.querySelector(".error-street").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[6].value.length <= 4){
        document.querySelectorAll('input[type="text"]')[6].classList.add("error")
    
        document.querySelector(".error-neighborhood").innerText = 'Escreva o nome completo do bairro'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[6].classList.remove("error")

        document.querySelector(".error-neighborhood").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[7].value.length <= 4){
        document.querySelectorAll('input[type="text"]')[7].classList.add("error")
       
        document.querySelector(".error-city").innerText = 'Escreva o nome completo da cidade'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[7].classList.remove("error")

        document.querySelector(".error-city").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[8].value.length != 2){
        document.querySelectorAll('input[type="text"]')[8].classList.add("error")
        
        document.querySelector(".error-state").innerText = 'Apenas a abreviação do estado'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[8].classList.remove("error")

        document.querySelector(".error-state").innerText = ''
    }

    if (document.querySelectorAll('input[type="text"]')[9].value.indexOf(",") == -1){
        document.querySelectorAll('input[type="text"]')[9].classList.add("error")
        
        document.querySelector(".error-specialty").innerText = 'Cadastre pelo menos duas especialidades'
        prosseguir = false
    }else {
        document.querySelectorAll('input[type="text"]')[9].classList.remove("error")

        document.querySelector(".error-specialty").innerText = ''
    }

    


    if (prosseguir == true){ 
    document.querySelector("form").submit()}
    else {

    }
}

function maskCrm(){
    
    const crm = document.querySelectorAll('input[type="text"]')[1].value

    if (crm.length == 2){
        document.querySelectorAll('input[type="text"]')[1].value = document.querySelectorAll('input[type="text"]')[1].value + "."  
    }

    if (crm.length == 6){
        document.querySelectorAll('input[type="text"]')[1].value = document.querySelectorAll('input[type="text"]')[1].value + "."  
    }

}

function maskTelephone(){
    
    const crm = document.querySelectorAll('input[type="text"]')[2].value

    if (crm.length == 0){
        document.querySelectorAll('input[type="text"]')[2].value = document.querySelectorAll('input[type="text"]')[2].value + "("  
    }

    if (crm.length == 3){
        document.querySelectorAll('input[type="text"]')[2].value = document.querySelectorAll('input[type="text"]')[2].value + ")"  
    }

    if (crm.length == 8){
        document.querySelectorAll('input[type="text"]')[2].value = document.querySelectorAll('input[type="text"]')[2].value + "-"  
    }

}

function maskCellphone(){
    
    const crm = document.querySelectorAll('input[type="text"]')[3].value

    if (crm.length == 0){
        document.querySelectorAll('input[type="text"]')[3].value = document.querySelectorAll('input[type="text"]')[3].value + "("  
    }

    if (crm.length == 3){
        document.querySelectorAll('input[type="text"]')[3].value = document.querySelectorAll('input[type="text"]')[3].value + ")"  
    }

    if (crm.length == 9){
        document.querySelectorAll('input[type="text"]')[3].value = document.querySelectorAll('input[type="text"]')[3].value + "-"  
    }

}

function maskCep(){
    
    const crm = document.querySelectorAll('input[type="text"]')[4].value

    if (crm.length == 5){
        document.querySelectorAll('input[type="text"]')[4].value = document.querySelectorAll('input[type="text"]')[4].value + "-"  
    }

}

function insere(especialidade){

    if (document.getElementsByName("specialty")[0].value.length == 0 && document.querySelectorAll('input[type="text"]')[9].value.indexOf(especialidade) == -1){
        document.getElementsByName("specialty")[0].value = document.getElementsByName("specialty")[0].value + especialidade
    }else if (document.querySelectorAll('input[type="text"]')[9].value.indexOf(especialidade) == -1){
    document.getElementsByName("specialty")[0].value = document.getElementsByName("specialty")[0].value + ", " + especialidade
    }else if (document.querySelectorAll('input[type="text"]')[9].value.indexOf(especialidade) != -1){
        document.getElementsByName("specialty")[0].value = document.getElementsByName("specialty")[0].value.replace(especialidade, "")
    }
}

module.exports = check(), maskCrm(), maskTelephone(), maskCellphone(), maskCep(), insere()