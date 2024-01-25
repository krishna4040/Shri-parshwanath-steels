import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'

const Landing = () => {
    return (
        <section className='w-full'>
            <Hero />
            <Products />
            <About />
        </section>
    )
}

export default Landing