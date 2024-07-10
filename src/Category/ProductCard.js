import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import{ cartAction } from '../Store/Slice/CartSlice';

export default function ProductCard(props) {

  const {id, title , image01 , price } = props.items;
  const dispatch = useDispatch()

  const addToCart=() =>{
    dispatch(cartAction.addItem({
      id,title,image01,price

    }))

  }
  return (
    <div>
      <div className='card mt-5'>
        <Link to={`/food/${id}`}><img src={image01} alt='Product Img' className='w-75 d-block mx-auto card-img-top'></img></Link>
        <div className='card-body'>
          <h5 className='text-center fs-5 card-title'><Link to={`/foods/${id}`}  className='text-dark'>{title}</Link></h5>
          <div className='mt-5 my-5 card-text'>
              <span className='span-color fs-4 ms-4'>${price}</span>
              <button className=' btn-color btn ms-5 text-light p-2 btn-lg' onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}