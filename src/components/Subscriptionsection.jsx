import { ArrowLeft, ArrowRight, Instagram, MoveUpRight } from 'lucide-react'
import React from 'react'
import player from '../assets/images/player.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Subscriptionsection() {
    return (
        <motion.div className='max-w-7xl mx-auto p-6'

            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="bg-[#EBEEF3] px-5 md:px-10 w-full rounded-md flex flex-col lg:flex-row items-center overflow-hidden">


                <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 space-y-8 max-w-xl">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                        NEWSLETTER
                        <span className="block">SUBSCRIPTION</span>
                    </h1>

                    <div className="flex w-full max-w-md">
                        <input
                            className="border-2 border-[#262626] px-4 h-12 w-full rounded-l-md outline-none"
                            type="email"
                            placeholder="shovon.khan0099@gmail.com"style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />

                        <button className="bg-[#262626] w-14 h-12 rounded-r-md flex items-center justify-center">
                            <MoveUpRight className="text-white" />
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        className="w-72 sm:w-96 lg:w-full object-contain"
                        src={player}
                        alt="player"
                    />
                </div>

            </div>
            <div className='flex justify-between py-10 md:py-15'>
                <div className='flex gap-2 md:gap-5'>
                    <div className='flex justify-center items-center rounded-md bg-[#262626] w-9 h-9 md:w-14 md:h-12'><FaInstagram className='text-white w-5 h-5 md:w-10 md:h-10' /></div>
                    <div className='flex justify-center items-center rounded-md bg-[#262626] w-9 h-9 md:w-14 md:h-12'><FaFacebookF className='text-white w-5 h-5 md:w-10 md:h-10' /></div>
                    <div className='flex justify-center items-center rounded-md bg-[#262626] w-9 h-9 md:w-14 md:h-12'><BsTwitterX className='text-white w-5 h-5 md:w-10 md:h-10' /></div>
                </div>
                <div className='flex  md:gap-10 justify-between  items-center  '>
                    <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#aaacad]'><ArrowLeft className='w-8 h-8 md:w-10 md:h-10' /> </div>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='' >
                            <div className='text-xl font-semibold hover:bg-black w-8 h-8 hover:text-white text-center rounded-full'>{item}</div>
                        </div>
                    ))}
                    <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#aaacad]'><ArrowRight className='w-8 h-8 md:w-10 md:h-10' /></div>
                </div>

            </div>
        </motion.div>

    )
}
