import React from 'react'
import './Products.css'
import Mobile from '../Mobile'
import Computer from '../computer'
import Tv from '../tv'
import Furniture from '../Furniture'
import Watch from '../Watch'
import MenFashion from '../MenFashion'
import WomenFashion from '../WomenFashion'
import Kitchen from '../Kitchen'

const Products = () => {

  
  return (
    <>

      <div className="product-heading">
        <h2 className='pro-heading'>OUR BRANDS</h2>
      </div>
    <div className='products-section'>
      <Mobile />
      <Computer />
      <Tv />
      <Furniture />
      <Watch />
      <MenFashion />
      <WomenFashion />
      <Kitchen />
    </div>
    </>
  )
}

export default Products