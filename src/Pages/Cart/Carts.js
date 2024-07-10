import React from 'react'
import CartsItem from '../Cart/Cartsitem'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import  { cartUiAction } from '../../Store/Slice/CartSliceUi'

export default function Carts() {

  const CartsItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  const cartToggle = () =>{
     dispatch(cartUiAction.toggle())
  }
  const totalAmount =useSelector( state => state.cart.totalAmount)
  return (
    <div className='cart-container '>
       <section className='cart position-fixed'>
         <div className='cart__close' onClick={cartToggle}>
           <span><i className='ri-close-fill'></i></span>
         </div>
         <div className='cart__item-list'>
          {
            CartsItems.map((items) =>{
               return <CartsItem item={items}></CartsItem>
            })
          }

         </div>
         <div className='cart__bottom d-flex align-items-center justify-content-between'>
           <h6>Subtotal amount: <span>${totalAmount}</span></h6>
           <button><Link to={'/checkout'}>Checkout</Link></button>
         </div>
       </section>
     
    </div>
  
  )
}