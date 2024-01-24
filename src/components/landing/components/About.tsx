import React from 'react'
import about from '../../../assets/home-unbiased-capital.png'

const About = () => {
    return (
        <div className='bg-[#f4f5f6] pt-32 pb-24'>
            <div className='w-[1250px] mx-auto flex flex-col items-start justify-center gap-5'>
                <h2 className='text-[#121316] text-5xl'>About us</h2>
                <img src={about} alt="image" />
            </div>
        </div>
    )
}

export default About