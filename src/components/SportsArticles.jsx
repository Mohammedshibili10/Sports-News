import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import profile1 from '../assets/images/profile1.jpg'
import profile2 from '../assets/images/profile2.jpg'
import profile3 from '../assets/images/profile3.jpg'
import basketball from '../assets/images/basketball.png'
import hockey from '../assets/images/hockey.svg'
import badmin from '../assets/images/badmin.png'
import { motion } from "framer-motion";
export default function SportsArticles() {
    const articles = [
        {
            id: 1,
            category: "Basketball",
            image: basketball,
            author: "Jake Will",
            avatar: profile1,
            date: "04 June 2023",
            title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
            desc: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles."
        },
        {
            id: 2,
            category: "Hockey",
            image: hockey,
            author: "Foxi.zacon",
            avatar: profile2,
            date: "03 June 2023",
            title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
            desc: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday."
        },
        {
            id: 3,
            category: "Badminton",
            image: badmin,
            author: "Bong Lozada",
            avatar: profile3,
            date: "01 June 2023",
            title: "‘Outdoor’ Badminton Gets Support From Local Federation",
            desc: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association."
        }
    ]
    return (
        <motion.div className='max-w-7xl mx-auto px-5 md:px-10 py-15 '
             
                
           initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
                >
            <div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                      Sports Articles
                    </h2>
                </div>
                <div className='md:flex  justify-between  gap-10'>
                    {articles.map((article, index) => (
                        <div className='w-full py-5 space-y-4'>
                    <div key={index} className='relative'>
                        <div  className='absolute right-5 top-5  w-25 h-8 border-2 text-[#EBEEF3] text-center border-gray-500 rounded-lg'>{article.category}</div>
                        <img className='w-full h-full ' src={article.image} alt="error" />
                    </div>
                    <div className='flex items-center gap-2'style={{ fontFamily: "'DM Sans', sans-serif" }}>
                       <img className='w-13 h-13 rounded-full object-cover' src={article.avatar} alt="error" />
                        <h1 className='font-semibold'>{article.author}</h1>
                    </div>
                    <div className='text-justify space-y-3 'style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <p className='text-xs text-[#262626]/60 '>{article.date}</p>
                        <h2 className='text-xl font-semibold'>{article.title}</h2>
                        <p className='text-[#696868] '>{article.desc}</p>
                    </div>
                    </div>
                    ))}
                </div>
                <div className='flex gap-5 md:py-8'>
                    <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#aaacad]'><ArrowLeft className='w-8 h-8 md:w-10 md:h-10' /></div>
                    <div className='md:w-20 md:h-12 flex justify-center items-center rounded-md bg-[#d7dadb]'><ArrowRight className='w-8 h-8 md:w-10 md:h-10'/></div>
                </div>

            </div>
            </motion.div>
     
    )
}
