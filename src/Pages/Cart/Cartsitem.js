import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../Store/Slice/CartSlice'

export default function CartsItem(props) {
  const {id, title, image01, price, totalprice, quantity} = props.item

  const dispatch = useDispatch()

  const addTocart=() =>{
    // alert('gfhj')
    dispatch(cartAction.addItem({
       id, title, image01, price

    }))
  }
  const removeItem=() =>{
    // alert('gfhj')
    dispatch(cartAction.removeItem({
       id, title, image01, price

    }))
  }

  const deleteItem=() =>{
    // alert('gfhj')
    dispatch(cartAction.deleteItem({
       id, title, image01, price

    }))
  }
  
  return (
    <div>
      <section className='border-0 cart__item'>
         <div className='cart__item-info d-flex gap-2'>
            <img src={image01} alt='' className='img-fluid'></img>
            <div className='cart__product-info w-100 d-flex align-items-center justify-content-center justify-content-between gap-4'>
              <div>
                <h6 className='cart__product-title'>{title}</h6>
                <p className='cart__product-price d-flex align-items-center gap-5'>{quantity}x <span>${totalprice}</span></p>
                <div className='d-flex align-items-center justify-content-between increase__decrease-btn'>
                   <span className='increase__btn' onClick={addTocart}><i className='ri-add-line'></i></span>
                   <span className='quantity'>{quantity}</span>
                   <span className='decrease__btn' onClick={removeItem}><i className='ri-subtract-line'></i></span>
                 </div>
              </div>
              <span className='delete__btn' onClick={deleteItem}><i className='ri-close-circle-fill'></i></span>
            </div>

         </div>
      </section>
    </div>
  )
}