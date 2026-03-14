import React from "react";
import racehorse from "../assets/images/racehorse.svg";
import cycle from "../assets/images/cycle.svg";
import boxing from "../assets/images/boxing.svg";
import workout from "../assets/images/workout.svg";
import { motion } from "framer-motion";
export default function TrendingNews() {
  const news = [
    {
      id: 1,
      image: racehorse,
      author: "Race98",
      date: "03 June 2023",
      title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
      desc: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
    },
    {
      id: 2,
      image: cycle,
      author: "JonyLs",
      date: "03 June 2023",
      title: "Savilia Blunk Embraces Longer Season With World Cup",
      desc: "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete",
    },
    {
      id: 3,
      image: boxing,
      author: "King.F",
      date: "03 June 2023",
      title: "Ryan Garcia is fighting again, this time on social media",
      desc: "Boxing star Ryan Garcia and his promoter reignited their war of words via Twitter",
    },
  ];

  return (
    <motion.div className="max-w-7xl mx-auto py-10 lg:py-20 px-5 md:px-10"

      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#EBEEF3] rounded-lg p-6">

        <div className="grid lg:grid-cols-2 gap-8">


          <div>
  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trending News</h2>

  {news.map((item) => (
    <div key={item.id} className="flex flex-col md:flex-row gap-4 mb-6">
      
      <img
        className="w-full md:w-52 h-48 md:h-44 object-cover rounded-md"
        src={item.image}
        alt={item.title}
      />

      <div className="space-y-2 md:space-y-3">
        <p className="text-xs md:text-sm text-[#262626]/60 dm-sans">
          {item.author} - {item.date}
        </p>

        <h3 className="font-medium text-sm md:text-base lg:text-lg leading-snug">
          {item.title}
        </h3>

        <p className="text-xs md:text-sm dm-sans text-[#696868]">
          {item.desc}
        </p>

        <hr className="border-[#4e4d4d] mt-3 md:mt-6" />
      </div>

    </div>
  ))}
</div>



          <div className="relative">
            <span className="absolute top-4 left-4 z-10 border border-white text-white px-3 py-1 rounded text-sm">
              Cycling
            </span>
            <img
              className="w-full h-full xl:h-170 object-cover rounded-lg"
              src={workout}
              alt="workout"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm">Debits - 03 June 2023</p>

              <h1 className="text-2xl lg:text-3xl font-black mt-2">
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h1>
            </div>

          </div>

        </div>

      </div>
    </motion.div>

  );
}