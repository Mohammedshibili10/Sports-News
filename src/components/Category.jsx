import React from 'react'
import football from '../assets/images/football.svg'
import basckt from '../assets/images/basckt.svg'
import carsport from '../assets/images/carsport.svg'
import tennis from '../assets/images/tennis.svg'
import { motion } from "framer-motion";
export default function Category() {
  return (
      <motion.div className="max-w-7xl mx-auto px-5 md:px-10 lg:pt-52 xl:pt-72"
     initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >
        <h2 className="text-3xl   font-semibold mb-6">Category</h2>

        <div className="flex flex-col md:flex-row gap-6">


          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-[#E6E9EE] h-32 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl lg:text-4xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">FOOTBALL</h3>
            </div>

            <img src={football} className="rounded-lg w-full h-60 object-cover" />
          </div>


          <div className="flex flex-col gap-6 flex-1">
            <img src={basckt} className="rounded-lg w-full h-60 object-cover" />

            <div className="bg-[#E6E9EE] h-32 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl lg:text-4xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                BASCKET<span className="block text-center"> BALL</span>
              </h3>
            </div>
          </div>


          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-[#E6E9EE] h-32 rounded-lg flex items-center justify-center  text-center p2">
              <h3 className="text-2xl lg:text-4xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">CAR SPORT</h3>
            </div>

            <img src={carsport} className="rounded-lg w-full h-60 object-cover" />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <img src={tennis} className="rounded-lg w-full h-60 object-cover" />

            <div className="bg-[#E6E9EE] h-32 rounded-lg flex items-center justify-center">
              <h3 className="text-2xl lg:text-4xl font-black bg-linear-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                TABLE <span className="block text-center">TENNIS</span>
              </h3>
            </div>
          </div>

        </div>
      </motion.div>
    
  )
}
