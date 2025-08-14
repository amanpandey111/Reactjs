import axios from "axios"

//todo : create a base url(instance)
const api = axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/51cc95ed151203bd3a1e3959"
})

//todo : we need to create a get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
}