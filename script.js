const convertButton = document.querySelector(".convertButton")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2
    const convertValues = inputCurrencyValue / dolarToday

    console.log(convertValues)
}

convertButton.addEventListener("click", convertValues)