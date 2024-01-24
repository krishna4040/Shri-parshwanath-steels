import React from 'react'

const Button = ({ text }: { text: string }) => {
    return <button className='bg-white text-black py-[7px] px-[18px] text-xs rounded-full'>{text}</button>
}

export default Button