import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Products from './components/products/Products'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App