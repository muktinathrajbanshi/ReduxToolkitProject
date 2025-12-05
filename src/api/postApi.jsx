import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/c0e4651455bb1b1672349f0d",
});

// to get the current exchange rate 

export const currencyConverter = async (fromCurrency, toCurrency, amount) => {
  const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
  console.log(res);
  return res.data.conversion_result;
};