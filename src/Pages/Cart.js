import React from 'react'
import Helment from '../Components/Helmet'
import CommanSection from '../Components/CommanSection'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'
import { Link } from 'react-router-dom'


export default function Cart() {

   const  CartItem = useSelector(state => state.cart.cartItems)

   const dispatch = useDispatch()

   const deleteItem = (id) =>{
    // alert('fghjk')
    dispatch(cartAction.deleteItem({
      id
    }))
   }
  return <Helment title='Cart'>
    <div>
       <div>
           <CommanSection title = 'Cart'></CommanSection>
       </div>
       <section  className='container-fluid'>
         <div className='row'>
            <div className='col-lg-12'>
               {
                 CartItem.length === 0 ? (<h3 className='text-center'>your Cart is Empty</h3>) :
                 <table className='table table-bordered'>
                 <thead>
                    <tr>
                       <td>Image</td>
                       <td>Product Title</td>
                       <td>Price</td>
                       <td>Quantity</td>
                       <td>Delete</td>
                     </tr>
                   </thead>
                 <tbody>
                   {
                      CartItem.map((item) =>{
                       return <Tr key={item.id} items={item} delete={deleteItem}></Tr>
                     })
                   }
                 </tbody>
              </table>
               }
            </div>
         </div>
        </section>

        <section className='container-fluid'>
               <div className='row'>
                  <h5>$TotalAmount</h5>
                  <div className='mt-4'>
                     <Link to ='/food'className='btn btn-danger'>continue</Link>
                     <Link to ='/food'className='btn btn-danger ms-5'>Cheakout</Link>
                  </div>
               </div>
        </section> 


  </div>
  </Helment>
  
}

const Tr = (props) =>{
  const { image01,title,price,quantity,id } = props.items;

 return(
  // <table className ='table table-bordered'>
<tr>
     <td className='text-center'><img src ={image01} alt='' style={{width:'30px'}}></img></td>
     <td className='text-center '>{title}</td>
     <td className='text-center '>${price}</td>
     <td className='text-center '>{quantity}</td>
     <td className='text-center'>
     <i class="ri-delete-bin-line" onClick={() => props.delete(id)}></i>
     </td>



  </tr>

// </table>
 )
}