function getCep(){
    const cep = document.getElementsByName("cep")[0].value.replace("-","")
    const url = "https://brasilapi.com.br/api/cep/v1/" + cep

    let iHttp = new XMLHttpRequest()
    iHttp.open('GET', url, true)

    iHttp.onreadystatechange = () => {
        if (iHttp.status == 200){
            const objCep = JSON.parse(iHttp.responseText)

            //Preenchendo inputs com dados retirados da api
            document.getElementsByName("street")[0].value = objCep.street            
            document.getElementsByName("neighborhood")[0].value = objCep.neighborhood    
            document.getElementsByName("city")[0].value = objCep.city          
            document.getElementsByName("state")[0].value = objCep.state

            document.getElementsByName("cep")[0].classList.remove("error")
            document.getElementsByName("cep")[0].classList.add("sucess")

            document.getElementsByName("street")[0].classList.add("sucess")
            document.getElementsByName("neighborhood")[0].classList.add("sucess")
            document.getElementsByName("city")[0].classList.add("sucess")
            document.getElementsByName("state")[0].classList.add("sucess")

        }else{                
            document.getElementsByName("cep")[0].classList.add("error")
        }
    }

    iHttp.send()
}

module.exports = getCep()