import React from 'react'
import { Link } from 'react-router-dom';

interface props {
    text: string | React.ReactNode;
    linkto?: string;
    clickHandler?: () => void;
    className?: string;
}

const Button = ({ text, linkto, clickHandler, className }: props) => {
    return (
        linkto ?
            <button onClick={clickHandler} className={`bg-white text-black py-[7px] px-[18px] text-xs rounded-full ${className}`}><Link to={linkto}>{text}</Link></button> :
            <button onClick={clickHandler} className={`bg-white text-black py-[7px] px-[18px] text-xs rounded-full ${className}`}>{text}</button>
    )
}

export default Button