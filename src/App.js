import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Product from "./product";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = () => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .then(console.log(products));
  };

  useEffect(() => {
    setTimeout(() => {
      // getdata();
      getProducts();
    }, 100);
  }, []);

  const handleChangeofinputvalue = (e) => {
    setSearch(e.target.value);
  };
  // console.log(search.toString().toLowerCase());

  // const filteredCoinonsearch = data.filter((coin) =>
  //   coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  // );

  // console.log(data);

  const selectedPageHandler = (selectedPage) => {
    debugger;
    if (selectedPage < 1 || selectedPage > products.length / 10) {
      alert("at endpoint");
      return;
    }
    setPage(selectedPage);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-green-200 to-indigo-600 grid grid-cols-1 sm:grid-cols-2 p-5 justify-center align-items-center">
        <div className="logo grid sm:justify-center">
          <h1 className="text-4xl font-extrabold gradient">CryptoMudra</h1>
        </div>
        <div className="search grid justify-center align-items-center p-1 rounded-sm">
          <input
            name="search"
            type="text"
            className=""
            placeholder="Search"
            onChange={handleChangeofinputvalue}
          />
        </div>
      </div>
      <div>
        <div className="table-responsive">
          {/* <table className="min-w-full">
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
                    key={index}
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
          </table> */}
        </div>

        <div className="p-container">
          {products.slice(page * 10 - 10, page * 10).map((product, index) => {
            return (
              <Product
                key={index}
                title={product.title}
                description={product.description}
                imageUrl={product.thumbnail}
              />
            );
          })}
        </div>
      </div>
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectedPageHandler(page - 1)}
            className={
              page > 1 ? " " : "pagination__disabled"
            }
          >
            ⇐
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => selectedPageHandler(i + 1)}
                className={page === i + 1 ? "pagination__selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectedPageHandler(page + 1)}
            className={
              page < products.length / 10 ? " " : "pagination__disabled"
            }
          >
            ⇒
          </span>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
