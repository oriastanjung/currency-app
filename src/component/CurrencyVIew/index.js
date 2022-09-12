import Currency from "../Currency";
import CurrencyViewHook from "./hooks/CurrencyViewHook"

function CurrencyView() {
    const {data} = CurrencyViewHook();
    return (
      <div className="App">
        <table>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
          {data && data.map((item, id) => {
            return <Currency key={id} name={item.name} exchange={item.exhcangeRate} />;
          })}
        </table>
  
        <footer>
          Rates are based from 1 USD. <br />
          This application uses API from https://currencyfreaks.com
        </footer>
      </div>
    );
}

export default CurrencyView