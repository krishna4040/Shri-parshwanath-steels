import React from 'react'
import { footer } from '../../contants'
import { Link } from 'react-router-dom'
import Button from './Button'

const Footer = () => {
    return (
        <footer className='px-10 py-10 bg-[#121316]'>
            <div className='flex flex-col items-start justify-between p-8 bg-[#1c1d22] rounded-lg'>
                <div className='flex items-start justify-between w-full'>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h3 className='text-[#fafafc] text-3xl'>Shri Parshwanath Steels</h3>
                        <p className='text-[#787c91] text-lg'>
                            Your one stop shop for the tech, buissness and <br />
                            finance news you need to know each week
                        </p>
                        <Button text='Products' />
                    </div>
                    <div className='flex items-start gap-5'>
                        <div>
                            <p className='text-[#787c91]'>products</p>
                            <ul className='flex flex-col justify-center text-[#d2d3da]'>
                                {
                                    footer.map((ele, idx) => {
                                        if (ele.title === 'product') {
                                            return <Link key={idx} to={'/'}>{ele.link}</Link>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='text-[#787c91]'>Company</p>
                            <ul className='flex flex-col justify-center text-[#d2d3da]'>
                                {
                                    footer.map((ele, idx) => {
                                        if (ele.title === 'company') {
                                            return <Link key={idx} to={'/'}>{ele.link}</Link>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='text-[#787c91]'>Learn More</p>
                            <ul className='flex flex-col justify-center text-[#d2d3da]'>
                                {
                                    footer.map((ele, idx) => {
                                        if (ele.title === 'learn more') {
                                            return <Link key={idx} to={'/'}>{ele.link}</Link>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className='flex items-center justify-start gap-3 text-xs text-[#d2d3da] w-full border-t border-[#2e3038] mt-40 pt-5'>
                    <li>Privacy policy</li>
                    <li>Responsible disclosure</li>
                    <li>Terms of use</li>
                    <li className='text-[#5c5f70]'>&cp2024 shri parshwanath steels inc. All rights reserved</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer