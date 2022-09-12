import React, {useState, useEffect} from 'react'
import axios from "axios";

function CurrencyView() {
    const [data, setData] = useState();

    const apiKey = "399b1d913a5840dc87032e26b027a4d5";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://api.currencyfreaks.com/latest?apikey=${apiKey}`
          );
          const keys = Object.keys(res.data.rates)
            .filter((key) => {
              return (
                key === "CAD" ||
                key === "EUR" ||
                key === "IDR" ||
                key === "JPY" ||
                key === "CHF" ||
                key === "GBP"
              );
            })
            .map((value, id) => {
              return {
                id: id,
                name: value,
                exhcangeRate: (+res.data.rates[value]).toFixed(4),
              };
  
            });
          setData(keys);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
  return {
    data
  }
}

export default CurrencyView