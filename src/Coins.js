import React from 'react';

const Coins = ({rank,id,name ,symbol,image,price,change,marketcap}) => {
    return (

           <tr key={id} className="bg-gray-200 max-w-sm border-2 border-gray-500">
                 <td className="m-2 p-4 text-center">{++rank}</td>
                <td className="m-2 text-center flex justify-center"><img src={image} className="rounded-2xl w-10 align-self-center" alt={symbol}/></td>
                <td className="m-2 p-4 text-center">{symbol.toString().toUpperCase()}</td>
                <td className="m-2 p-4 text-center ">{price}</td>
                <td className="m-2 p-4 text-center ">{change.toString().toUpperCase()}</td>
                <td className="m-2 p-4 text-center ">{marketcap.toString().toUpperCase()}</td>
           </tr> 
    )
}
 
export default Coins;
