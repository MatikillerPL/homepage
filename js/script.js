let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.36;
let rateEUR = 4.70;
let rateCHF = 4.74;
let rateGBP = 5.33;
let rateTRY = 0.21;
let rateBRL = 0.83;
let rateARS = 0.021;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency= currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        case "EUR":
            result = amount / rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "TRY":
            result = amount / rateTRY;
            break;
        case "BRL":
            result = amount / rateBRL;
            break;
        case "ARS":
            result = amount / rateARS;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
