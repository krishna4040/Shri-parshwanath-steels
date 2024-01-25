import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Hero = () => {

    const [photos, setPhotos] = useState([]);

    const fecthRandomImage = async () => {
        try {
            const options = {
                query: 'metal',
                count: 10,
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
        <div className='w-full flex flex-col items-start justify-center gap-5 px-10 py-16 bg-gradient-to-br from-[#09090b] to-[#09090b] border'>
            <div className='flex flex-col items-start justify-center gap-8'>
                <h6 className='text-[#84889a]'>Shri Parshwanath Steels</h6>
                <h1 className='text-[80px] leading-[80px] text-white'>The Morden Platform For Growth on your terms</h1>
                <button className='bg-white text-black py-[7px] px-[18px] text-xs rounded-full'>Checkout Product Page</button>
            </div>
            <div className='w-full mx-auto'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={3}
                    spaceBetween={0}
                    autoplay
                    pagination
                    loop
                >
                    {
                        photos.map((photo, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <img src={photo} alt="photo" className='rounded-lg max-h-[400px]' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Hero