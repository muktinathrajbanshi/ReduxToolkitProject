import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/c0e4651455bb1b1672349f0d",
});

// to get the current exchange rate 

export const currencyConverter = () => {
    api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};