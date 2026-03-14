import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Category from '../components/Category'
import TrendingNews from '../components/TrendingNews'
import Gamesslide from '../components/Gamesslide'

import SportsSection from '../components/SportsSection'
import SportsArticles from '../components/SportsArticles'
import Subscriptionsection from '../components/Subscriptionsection'

export default function Home() {
  return (
    <div >
     
        <Navbar/>
        <div className='bg-[#F5F5F5] '>
        <Herosection/>
        <Category/>
        <TrendingNews/>
        <Gamesslide/>
        <SportsSection/>
        <SportsArticles/>
        <Subscriptionsection/>

        </div>
    
    </div>
  )
}
