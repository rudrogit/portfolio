import React from 'react'
import Navber from './components/WebControl/Navber'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import Footer from './components/WebControl/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      
    <Navber/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/contact' element={<ContactPage/> }/>
      </Routes>    
    <Footer/>

    </div>
  )
}

export default App
