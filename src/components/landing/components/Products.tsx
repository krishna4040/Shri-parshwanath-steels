import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {
    const [photos, setPhotos] = useState([]);

    const fecthRandomImage = async () => {
        try {
            const options = {
                query: 'metal',
                count: 6,
                orientation: 'squarish'
            }
            const url = `${import.meta.env.VITE_BASEURL}/search/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}&count=${options.count}&query=${options.query}&orientation=${options.orientation}`;
            const { data } = await axios.get(url);
            const photoCollection = data.results.map((photo: any) => photo.urls.full);
            console.log(photoCollection);
            setPhotos(photoCollection);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthRandomImage();
    }, []);

    return (
        <div className='mt-7'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xs text-[#84889a]'>Latest Products</p>
                <p className='text-4xl text-[#121316]'>More information you want to cover</p>
            </div>
            <div className='grid items-center grid-cols-3 px-10 py-8 justify-items-center gap-y-10'>
                {
                    photos.splice(0, 6).map((photo, idx) => {
                        return <ProductCard
                            image={photo}
                            key={idx}
                            price='300'
                            title='Product'
                            colorScheme={idx & 1 ? 'blue' : 'gray'}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Products