import React from 'react'
import Header from './Header'
import Router from '../Routes/Router'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Carts from '../Pages/Cart/Carts'


export default function Layout() {
  const carts = useSelector(state => state.cartUi.cartVisible)
  return (
    <div>
      {
        carts === true ? <Carts></Carts> : null
      }
            <Header></Header>
        <div>
            <Router></Router>
        </div>
            <Footer></Footer>
    </div>
  )
}

