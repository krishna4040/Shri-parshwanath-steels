import React from 'react'
import Button from '../../common/Button';
import { FaShareAlt } from "react-icons/fa";

interface props {
    title: string;
    image: string;
    price: string;
    colorScheme?: 'gray' | 'blue';
}

const ProductCard = ({ title, image, price, colorScheme }: props) => {
    return (
        <div
            className={`rounded-lg min-h-[300px] flex flex-col items-start justify-start gap-3 
                ${colorScheme == 'gray' ? 'bg-[#e9eaed]' : 'bg-[#3d57da]'} 
                transition-all duration-200 hover:scale-110`}
        >
            <img src={image} alt="image" className='rounded-lg' />
            <div className='flex flex-col items-start justify-center gap-3 p-4'>
                <h2 className='text-3xl'>{title.split(' ').splice(0, 4).join(' ')}</h2>
                <p>Amount <span className={`${colorScheme == 'gray' ? 'text-blue-500' : 'text-yellow-600'} `}>Rs.{price}</span></p>
                <Button text={<FaShareAlt />} />
            </div>
        </div>
    )
}

export default ProductCard