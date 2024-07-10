import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  {cartUiAction } from '../Store/Slice/CartSliceUi'

export default function Header() {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const dispatch = useDispatch()
    
    const cartToggle = () =>{
       dispatch(cartUiAction.toggle())
    }
  return (
    <div>
        <section className='container'>
            <div className='row'>
                <div className='col-lg-2 col-md-4 col-sm-12'>
                    <img src='/assets/img/res-logo.png' alt='' className='w-25 mx-auto d-block'></img>
                     <h5 className='text-center'>Tasty Treat</h5>
                </div>
                <div className='col-lg-8 col-md-4 col-sm-12  justify-content-center d-flex'>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                      <li className="nav-item  pe-5">
                        <Link className="nav-link active" aria-current="page" to="/home"> Home</Link>
                      </li>
                      <li className="nav-item pe-5">
                        <Link className="nav-link active" to="/food">Foods</Link>
                      </li>
                      <li className="nav-item pe-5">
                        <Link className="nav-link active" to="/cart">Carts</Link>
                        <span></span>
                      </li>
                      <li className="nav-item pe-5">
                        <Link className="nav-link active" to="/contact">Contact</Link>
                      </li>
                      </ul>    
                  </div>
               </div>
            </nav>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-12'>
                {/* <i className="ri-shopping-bag-4-line"></i> */}
                <span className="material-symbols-outlined ms-4 shopping_bag position-relative mt-4" onClick={cartToggle}>shopping_bag
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle cart_icon">
                {totalQuantity}
                </span>
                </span>
                <span className="material-symbols-outlined ms-5">person</span> 
                </div>
            </div>
        </section>

    </div>
  )
}
