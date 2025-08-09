import React from 'react'
import HeaderM from './HeaderM'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainPage() {
  return (
    <div>
        <HeaderM/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default MainPage