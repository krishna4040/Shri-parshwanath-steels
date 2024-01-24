import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App