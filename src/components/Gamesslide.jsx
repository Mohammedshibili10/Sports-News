import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import footbalbg from '../assets/images/footbalbg.svg'
import { motion } from "framer-motion";
export default function Gamesslide() {
  return (
     <motion.div className='max-w-7xl mx-auto px-5 md:px-10'
       
           initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
          >
      <div className='bg-[#EBEEF3] w-full rounded-lg '>
        <div className='relative '>
          <div>
            <div className='absolute top-3 md:top-10 left-3 md:left-10 z-999 border-2 border-white  text-white rounded-md text-xs md:text-lg w-15 h-6 md:w-25 md:h-8 text-center'>Football</div>
          </div>
          <div className=' w-full rounded-lg '>
            <img className='w-full rounded-md object-contain ' src={footbalbg} alt="footballbg" />
            <div className="absolute bottom-3 w-full h-full rounded-lg inset-0 bg-linear-to-t from-black/60 via-black/90 to-transparent "></div>
          </div>
          <div className='p-2 absolute bottom-1 md:bottom-10  md:left-10 space-y-1 md:space-y-2 max-w-3xl'>
            <p className='text-white text-xs md:text-lg dm-sans'>Agence France-Presse - 04 June 2023</p>
            <h1 className='text-sm md:text-4xl font-black text-white' >LIONAL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN,CLUB CONFIRMS</h1>
            <p className='text-xs md:text-xl text-white dm-sans'>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</p>
          </div>
        </div>
        <div className='flex md:gap-10 justify-end items-center py-5'>
          <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#aaacad]'><ArrowLeft className='w-8 h-8 md:w-10 md:h-10' /> </div>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className='' >
              <div className='text-xl font-semibold hover:bg-black w-8 h-8 hover:text-white text-center rounded-full'>{item}</div>
            </div>
          ))}
          <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#aaacad]'><ArrowRight className='w-8 h-8 md:w-10 md:h-10'  /></div>
        </div>



      </div>
      </motion.div>
 
  )
}
