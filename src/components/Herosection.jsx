import React from 'react'
import baseball from '../assets/images/baseball.png'
import man from '../assets/images/man.png'
import car from '../assets/images/car.png'
import running from '../assets/images/running.png'
import { motion } from "framer-motion";
export default function Herosection() {
    return (
        <motion.div className='max-w-7xl mx-auto px-4'
            
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1]   
                }}
            >
                <div className='relative flex flex-col md:flex-row justify-between lg:items-center'>

                    <div>
                        <div className='absolute'>
                            <img className='w-80 md:w-125 lg:w-170 opacity-60' src={baseball} alt="Baseball" />
                        </div>

                        <div className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl pt-20 md:pt-24 lg:pt-30 md:pl-10 lg:pl-20'>
                            <h1 className="font-mont text-5xl md:text-5xl lg:text-6xl  xl:text-7xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                                TOP <br />
                                SCORER TO <br />
                                THE FINAL MATCH
                            </h1>
                        </div>
                        <div className='absolute bottom-10 md:bottom-0  lg:bottom-5 xl:bottom-0 top-15 md:top-20  xl:top-22 left-20 md:left-28 lg:left-32 xl:left-45'>
                            <img className='w-75 md:w-110 lg:w-140 xl:w-full' src={man} alt="Man" />
                        </div>

                        <div className='font-mont relative mt-10 md:mt-20 lg:top-5 xl:top-20  lg:right-15 xl:right-0 flex flex-col justify-center items-center text-center text-base md:text-lg text-[#343536] md:pl-50  lg:pl-110 gap-5'>
                            <div className='max-w-sm md:max-w-xs lg:max-w-102.5 space-y-5'>
                                <p className=' text-sm xl:text-md font-medium' style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                                </p>

                                <button className='md:text-sm lg:text-lg font-semibold  w-42  lg:w-60 xl:w-70 h-11 md:h-12 lg:h-13 rounded-lg bg-[#262626] text-[#E1E8F0] hover:bg-[#E1E8F0] hover:text-[#262626]'>
                                    Continue reading 
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='relative dm-sans mt-10 lg:mt-0 lg:top-20 xl:top-25 lg:px-5'>
                        <div className='bg-[#E1E8F0] text-[#B8C2CE] text-sm lg:text-lg font-semibold w-16 lg:w-20 h-6 lg:h-9 md:h-7 rounded-md mb-3 text-center pt-0.5 md:pt-0.5'>Today</div>

                        <div>
                            <div className='relative'>
                                <img className='w-full md:w-50 lg:w-60' src={running} alt="" />
                                <div className='rounded-md absolute bottom-0 left-0 w-full md:w-50 lg:w-58 xl:w-60 h-24 md:h-32 bg-linear-to-t from-[#dfdcdc] to-transparent'></div>
                            </div>

                            <div className='relative -top-20 md:-top-19 left-4 md:left-2 w-52 p-2 md:w-58'>
                                <p className='text-sm md:text-xs text-[#262626]/60'>Race98 - 03 June 2023</p>
                                <p className='text-sm lg:text-md dm-sans '>Ethiopian runners took the top four spots.</p>
                            </div>
                        </div>

                        <div>
                            <div className='relative'>
                                <img className='rounded-md w-full md:w-50 lg:w-60' src={car} alt="error" />
                                <div className='rounded-md absolute bottom-0 left-0 w-full md:w-50 lg:w-58 xl:w-60 h-24 md:h-32 bg-linear-to-t from-[#dfdcdc] to-transparent'></div>
                            </div>

                            <div className='relative -top-15 md:-top-20 left-4 md:left-2 p-2 w-52 md:w-58'>
                                <p className='text-sm md:text-xs text-[#262626]/60'>INDYCAR - 03 June 2023</p>
                                <p className='text-sm lg:text-md font-medium'style={{ fontFamily: "'DM Sans', sans-serif" }}>IndyCar Detroit:Dixon quickest in second practice</p>
                            </div>
                        </div>

                    </div>

                </div>


            </motion.div>
      
    )
}