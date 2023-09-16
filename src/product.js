import React from 'react'
import './App.css';

const Product = ({title , description , imageUrl}) => {
  return (
   <div className="products">
          <img src={imageUrl} alt={title} />
          <span>{title}</span>
   </div>
  )
}

export default Product