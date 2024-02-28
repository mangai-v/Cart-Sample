import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { cartContext } from '../App'
const Cart = () => {
  const {cart,setCart} = useContext(cartContext)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
      <h1 className='cart-heading'>
        Cart Products
      </h1>
    <div className='cart-container'>
      {cart.map((product)=>(
        <div className="cart-product">
          <div className="img">
            <img src={product.pic} alt={product.name} />
          </div>
          <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price Rs-{product.amt}</p>
          </div>
        </div>
      ))}
      <h1 className='cart-amt'>Total Amount Rs-{total}</h1>
      
    </div>
    </>
  )
}

export default Cart