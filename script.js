const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 4.88
    const euroToday = 5.34
    const yenToday = 0.034



    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    } 

    if(currencySelect.value == "yen"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP",{
        style: "currency",
        currency: "JPY"
        }).format(inputCurrencyValue/yenToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)






    console.log(convertValues)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src="./assets/imagens/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/imagens/euro.png"
    }

    if(currencySelect.value == "yen"){
        currencyName.innerHTML = "Yen japonês"
        currencyImage.src="./assets/imagens/japao.png"
    }
    convertValues()
   
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)