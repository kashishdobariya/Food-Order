import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood';
import Cart from '../Pages/Cart';
import Cheakout from '../Pages/Cheakout';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Fooddetail from '../Pages/Fooddetails';


export default function Router() {
  return (
  
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
             <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/food' element={<Allfood></Allfood>}></Route>
            <Route path='/food/:id' element={<Fooddetail></Fooddetail>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/Checkout' element={<Cheakout></Cheakout>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>

  )
}
