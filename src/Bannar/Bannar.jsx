import React from 'react';
import googlePlay from '../assets/Group (3).png'
import appStore from '../assets/Group (5).png'
import heroimag from '../assets/hero.png'

const Bannar = () => {
    return (
        <div>
            <div className='text-center'>
                <div>
                    <h1 className='font-bold text-4xl mt-2'>We Build <br /> <span className='text-[#632EE3] mt-2'> Productive</span> Apps</h1>
                    <p className='mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='mt-4 gap-4'>
                    <a href="https://play.google.com/store/games?device=windows"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-gradient-to-r px-4 py-2 rounded transition mt-2">
                        <img src={googlePlay} alt="Play Store" className='w-6 h-6' />


                        Google Play
                    </a>

                    <a href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-gradient-to-r px-4 py-2 rounded  transition mt-2">
                        <img src={appStore} alt="App Store" className='w-6 h-6' />
                        App Store
                    </a>


                </div>
                <div className='flex justify-center mt-4'>
                    <img className='w-[600px] h-auto' src={heroimag} alt="" />
                </div>

                <div className="flex flex-col">
                    <div className='  w-full h-[310px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
                        <h2 className='text-center text-white font-bold text-3xl mt-6 '>Trusted by Millions, Built for You</h2>
                        <div className='flex flex-col md:flex-row justify-center mt-10 gap-16'>
                            <div className='div-1 text-center'>
                                <h2 className='text-white font-normal'>Total Downloads</h2>
                                <h1 className='text-white font-bold text-4xl mt-4' >29.6M</h1>
                                <p className='text-white font-normal mt-4'>21% more than last month</p>
                            </div>
                            <div className='div-2 text-center'>
                                <h3 className='text-white font-normal'>Total Reviews</h3>
                                <h1 className='text-white font-bold text-4xl mt-4'>906K</h1>
                                <p className='text-white font-normal mt-4'>46% more than last month</p>
                            </div>
                            <div className='div-3 text-center'>
                                <h4 className='text-white font-normal'>Active Apps</h4>
                                <h1 className='text-white font-bold text-4xl mt-4'>132+</h1>
                                <p className='text-white font-normal mt-4'>31 more will Launch</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Bannar;