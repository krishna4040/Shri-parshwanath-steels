import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'

const Landing = () => {
    return (
        <section className='bg-gradient-to-br from-[#09090b] to-[#09090b] border'>
            <Hero />
            <Products />
            <About />
        </section>
    )
}

export default Landing