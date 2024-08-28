// import { func } from "prop-types";
import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        return response.json()  
      })
      .then((json) => setCoins(json));
      setLoading(false);
  }, [])
  const onChange = (event) => {
    setInput(event.target.value);
  }

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(input.toLocaleLowerCase())
  })
  return(
    <div>
      <h1>The Coins ({filterCoins.length})</h1>
      <input 
        type="text" 
        value={input}
        onChange={onChange}
      />
      {loading ? <strong>loading</strong>: null}
      <ul>
        {filterCoins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Coin;
