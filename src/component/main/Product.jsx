import React from 'react'
import './Product.css'
const Product = ({avatar,desc,price,city}) => {
  return (
    <div className='product'>
     <img src={avatar} /> 
     <div>
        <h5> Rs {price}</h5>
     </div>
     <div>
        {desc}
     </div>
     <div>
        {city}
     </div>
    </div>
  )
}

export default Product
