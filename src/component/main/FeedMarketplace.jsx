import React from 'react'
import Product from "./Product";
import './FeedMarketplace.css'
import prod1 from '../../images/products/2007 Cherry Car.jpg'
import prod2 from '../../images/products/product2.jpg'
import prod3 from '../../images/products/product3.jpg'
import prod4 from '../../images/products/product4.jpg'
import prod5 from '../../images/products/product5.jpg'
import prod6 from '../../images/products/product6.jpg'
import prod7 from '../../images/products/product7.jpg'
import prod8 from '../../images/products/product8.jpg'
import prod9 from '../../images/products/product9.jpg'
import prod10 from '../../images/products/product10.jpg'

const FeedMarketplace = () => {
  return (
    <div className='feedmarket'>
        <div className="todaypicks">
            <div className="headertoday">
                <div>
                    <h5> Today's Pick </h5>
                </div>
                <div>
                    <h5> Lahore </h5>
                </div>
            </div>
            <div className="bodytoday">
                <div className="inter">
                    <Product  avatar={prod1}  price="500000" desc="Cherry Car" city="Lahore"  />
                    <Product  avatar={prod2}  price="2250" desc="Men's wear* 4 season collection" city="Lahore"  />
                    <Product  avatar={prod3}  price="25 lac" desc="3 Marla plot for sale" city="Lahore"  />
                    <Product  avatar={prod4}  price="4,690,000" desc="Stonic ex+" city="Lahore"  />
                    <Product  avatar={prod5}  price="1750" desc="Gent's Sandals Comfortable sole" city="Lahore"  />
                    <Product  avatar={prod6}  price="2750" desc="Zellbury summer collection " city="Lahore"  />
                    <Product  avatar={prod7}  price="24,800" desc="Iphone 12 pro max" city="Islamabad"  />
                    <Product  avatar={prod8}  price="15000" desc="Nikon Camra"  />
                    <Product  avatar={prod9}  price="7000" desc="Ramzan Special offer 6 chair set with table Cash on delivery"  />
                    <Product  avatar={prod10}  price="18000" desc="Cup Swing Hanging Chair"  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default FeedMarketplace
