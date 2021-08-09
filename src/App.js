import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import Coins from './Coins';

const App = () => {
    
    const [data , setData]=useState([]);
    const [search , setSearch]=useState([]);
 const uri="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const getdata=()=>{
    axios.get(uri)
    .then(res => {
      
      setData(res.data);
    })
    .catch(err=>{
      alert(err)
    })
   }
   
   useEffect(()=>{
    setTimeout(()=>{getdata()},100)

   },[])
   
   

 


  const handleChangeofinputvalue=(e)=>{
       setSearch(e.target.value);
  }
     console.log(search.toString().toLowerCase());

  const filteredCoinonsearch=data.filter(coin=>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  console.log(data)
  return (
          <> 
             
             <div className="bg-gradient-to-tr from-green-400 to-blue-700">
          
           <label htmlFor="Search">Search here</label>
          <br></br><br />  
                
                    <form className="items-center justify-center bg-center ">
                   <input type="text" placeholder="search" onChange={handleChangeofinputvalue} />
                   </form> 
                 { filteredCoinonsearch.map((curEle)=>{
                    return(
                        <div className="justify-center bg-red-600 border-4 shadow-2xl">
                        <Coins key={curEle.id} 
                               name={curEle.name}
                               image={curEle.image}
                               symbol={curEle.symbol}
                               price={curEle.current_price}
                               change={curEle.price_change_percentage_24h}
                               marketcap={curEle.market_cap}
                        />
                       </div>
               )
          })
         }
        
         </div>   
        </>
  )
}

export default App;
