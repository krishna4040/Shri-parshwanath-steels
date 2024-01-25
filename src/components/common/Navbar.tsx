import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);

    const func = () => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;
            if (navRef.current) {
                if (prevScrollpos > currentScrollPos) {
                    navRef.current.classList.remove("nav-hide");
                } else {
                    navRef.current.classList.add("nav-hide");
                }
            }
            prevScrollpos = currentScrollPos;
        };
    }

    useEffect(() => {
        func();
    }, [window.pageYOffset]);

    return (
        <nav className='flex items-center justify-between bg-[#121316] fixed top-0 left-0 right-0 py-5 text-white z-10 transition-all duration-200' ref={navRef}>
            <ul className='flex items-center justify-start w-[1440px] mx-auto gap-5'>
                <li>Shri Parshwanath Steels</li>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/products'}><li>Products</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar