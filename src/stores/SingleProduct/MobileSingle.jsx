import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {useCart} from '../Cart/CartContext'

const MobileSingle = () => {

    const {id} = useParams();

    const {addToCart} = useCart()

    const product = mobileData.find((item) => item.id === id)
  return (
    <>
    <Navbar />
    <div className='single-section'>
        <div className="single-img">
            <img src={product.image} alt={product.model} />
        </div>
        <div className="text-section">
            <div className="single-model">
                <h2>{product.company}</h2>
                <h3>{product.model}</h3>
            </div>
            <div className="single-price">
                <h2>Rs.{product.price}</h2>
            </div>
            <div className="single-description">
                <p>
                    {product.description}
                </p>
            </div>
            <div className="pro-selection">
                <button className="cart" onClick={()=>addToCart(product)}>Add to Cart</button>
                <button className="buy">Buy Now</button>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default MobileSingle