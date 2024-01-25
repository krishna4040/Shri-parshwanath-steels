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

    const shareHandler = () => {
        window.location.href = `whatsapp://send?text=http://localhost:5173`;
    }

    return (
        <div
            className={`rounded-lg flex flex-col items-start justify-start gap-3 
                ${colorScheme == 'gray' ? 'bg-[#e9eaed]' : 'bg-[#e9eaed]'} 
                transition-all duration-200 hover:scale-110`}
        >
            <img src={image} alt="image" className='rounded-lg w-full h-[300px]' />
            <div className='flex flex-col items-start justify-center w-full gap-3 p-4'>
                <h2 className='text-3xl'>{title.split(' ').splice(0, 4).join(' ')}</h2>
                <p>This is the descrition of the product. this is very good</p>
                <p>Amount <span className={`${colorScheme == 'gray' ? 'text-blue-500' : 'text-yellow-600'} `}>Rs.{price}</span></p>
                <Button text={<FaShareAlt />} clickHandler={shareHandler} className='self-end float-right border-8' />
            </div>
        </div>
    )
}

export default ProductCard