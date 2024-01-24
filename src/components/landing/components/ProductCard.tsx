import React from 'react'

interface props {
    title: string;
    image: string;
    description: string;
    price: string;
    colorScheme?: string;
}

const ProductCard = ({ title, image, description, price }: props) => {
    return (
        <div className='p-10 bg-[#e9eaed] rounded-lg min-h-[380px] flex flex-col items-start justify-center gap-3'>
            <h2 className='text-3xl font-semibold'>{title.split(' ').splice(0, 4).join(' ')}</h2>
            <div className='px-24 my-2 w-[300px] border'><img src={image} alt="image" /></div>
            <p>{description.split(' ').splice(0, 20).join(' ')}</p>
            <p>Amount <span>Rs.{price}</span></p>
        </div>
    )
}

export default ProductCard