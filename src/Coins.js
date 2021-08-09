import React from 'react';

const Coins = ({name ,symbol,image,price,change,marketcap}) => {
    return (

         <div className="grid items-center justify-center grid-cols-7 bg-green-400 bg-trcolansparent mr-auto- inlline-flex coinContainer">
             <div className="inline coinimg"><img src={image} className="w-8 rounded-2xl" alt="imageurl"/></div>
             <div className="inline coinname" >{name}</div>
             <div className="inline coinsymbol">{symbol.toString().toUpperCase()}</div>
             <div className="inline border-b-2 coinprice">{price}</div>
             <div className="inline coinchange">{change}</div>
             <div className="inline coinvol"></div>
             <div className="inline coinmcap">{marketcap}</div>
         </div>
        
    )
}
 
export default Coins;
