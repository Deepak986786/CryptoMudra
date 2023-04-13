import axios from "axios";
import React, { useState, useEffect } from "react";
import Coins from "./Coins";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const uri =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const staticData = [];

  const getdata = () => {
    axios
      .get(uri)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getdata();
    }, 100);
  }, []);

  const handleChangeofinputvalue = (e) => {
    setSearch(e.target.value);
  };
  console.log(search.toString().toLowerCase());

  const filteredCoinonsearch = data.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  console.log(data);
  return (
    <>
      <div className="bg-gradient-to-r from-green-200 to-indigo-600 grid grid-cols-1 sm:grid-cols-2 p-5 justify-center align-items-center">
        <div className="logo grid sm:justify-center">
          <h1 className="text-4xl font-extrabold gradient">CryptoMudra</h1>
        </div>
        <div className="search grid justify-center align-items-center p-1 rounded-sm">
          <input
            type="text"
            className=""
            placeholder="Search"
            onChange={handleChangeofinputvalue}
          />
        </div>
      </div>
      <div>
        <div className="table-responsive">
          <table className="min-w-full">
            <thead>
              <tr className="m-2 bg-gray-400">
                <th className="m-2 p-4">#</th>
                <th className="m-2 p-4">Symbol</th>
                <th className="m-2 p-4">Coin</th>
                <th className="m-2 p-4">Price</th>
                <th className="m-2 p-4">24h change</th>
                <th className="m-2 p-4">marketcap</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoinonsearch.map((curEle, index) => {
                return (
                  <Coins
                    rank={index}
                    id={curEle.id}
                    name={curEle.name}
                    image={curEle.image}
                    symbol={curEle.symbol}
                    price={curEle.current_price}
                    change={curEle.price_change_percentage_24h}
                    marketcap={curEle.market_cap}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
