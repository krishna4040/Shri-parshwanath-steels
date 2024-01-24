import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-[#121316] sticky inset-0 py-5 opacity-60 text-white backdrop-blur-xl z-10'>
            <ul className='flex items-center justify-start w-[1440px] mx-auto gap-5'>
                <li>Shri Parshwanath Steels</li>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/products'}><li>Products</li></Link>
            </ul>
        </nav>

    )
}

export default Navbar