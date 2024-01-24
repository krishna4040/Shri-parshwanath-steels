import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const COUNT = 10;

const Hero = () => {

    const [photos, setPhotos] = useState([]);

    const fecthRandomImage = async () => {
        const url = `https://api.unsplash.com/photos/random/?client_id=rwfITZE3pW4SSzIzUU_-fRTJIIMLOA33AqoJmtEbGP0&count=10`;
        const { data } = await axios.get(url);
        console.log(data);
        const photoCollection = data.map((photo: any) => photo.urls.small);
        setPhotos(photoCollection);
    }

    useEffect(() => {
        fecthRandomImage();
    }, []);

    return (
        <div className='px-10 py-16 w-full'>
            <div className='flex flex-col items-start justify-center gap-8'>
                <h6 className='text-[#84889a]'>Shri Parshwanath Steels</h6>
                <h1 className='text-[80px] leading-[80px] text-white'>The Morden Platform For Growth on your terms</h1>
                <button className='bg-white text-black py-[7px] px-[18px] text-xs rounded-full'>Checkout Product Page</button>
            </div>
            <div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    autoplay
                >
                    {
                        photos.map((photo, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <img src={photo} alt="photo" height={100} width={100} />
                                </SwiperSlide>
                            )
                        })
                    }
                    {/* <SwiperSlide>slide 1</SwiperSlide>
                    <SwiperSlide>slide 2</SwiperSlide>
                    <SwiperSlide>slide 3</SwiperSlide>
                    <SwiperSlide>slide 4</SwiperSlide>
                    <SwiperSlide>slide 5</SwiperSlide>
                    <SwiperSlide>slide 6</SwiperSlide>
                    <SwiperSlide>slide 7</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero