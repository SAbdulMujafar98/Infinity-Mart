import React from 'react'
import './UserCart.css'
import {useCart} from './CartContext'

const UserCart = () => {

    const {cartItems, removeFromCart} = useCart()

    const product = cartItems


  return (
    <div>
        {cartItems.map((item)=>{
            return(
                <div className="cart-section">
                    <div className="cart-img">
                        <img src={item.image} alt={item.company}/>
                    </div>
                    <div className="cart-details">
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>
                        <h2>{item.model}</h2>
                    </div>
                    <div className="button">
                        <button className="remove" onClick={()=>removeFromCart(product)}>Remove</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default UserCart