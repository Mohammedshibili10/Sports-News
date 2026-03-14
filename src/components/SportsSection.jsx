

import React from "react"

import city from '../assets/images/city.png'
import united from '../assets/images/united.png'
import arsanel from '../assets/images/arsanel.png'
import chelse from '../assets/images/chelse.png'
import liverpool from '../assets/images/liverpool.png'
import tottenham from '../assets/images/tottenham.png'

import hokey from '../assets/images/hokey.svg'
import kick from '../assets/images/kick.jpg'
import hockeyball from '../assets/images/hockeyball.jpg'
import cricketball from '../assets/images/cricketball.jpg'
import { motion } from "framer-motion";

export default function SportsSection() {

    const news = [
        {
            id: 1,
            img: kick,
            tag: "#Poller",
            date: "17 July 2023",
            title: "Baku 2023 Taekwondo Championships"
        },
        {
            id: 2,
            img: hockeyball,
            tag: "#Golf",
            date: "20 July 2023",
            title: "Open Championship Royal Liverpool Golf"
        },
        {
            id: 3,
            img: cricketball,
            tag: "#Cricket",
            date: "27 July 2023",
            title: "Ireland Tour of England Test 2023"
        }
    ]

    const clubs = [
        {
            name: "Manchester City",
            logo: city,
            gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73
        },
        {
            name: "Liverpool",
            logo: liverpool,
            gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68
        },
        {
            name: "Chelsea",
            logo: chelse,
            gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43
        },
        {
            name: "Tottenham Hotspur",
            logo: tottenham,
            gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29
        },
        {
            name: "Arsenal",
            logo: arsanel,
            gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13
        },
        {
            name: "Manchester United",
            logo: united,
            gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0
        }
    ]

    return (

        <div className="max-w-7xl mx-auto px-5 md:px-10 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <h2 className="text-3xl font-semibold mb-6">
                    Recent News
                </h2>
                <div className="md:flex gap-6">
                    <div className="relative w-full h-90 rounded-lg overflow-hidden text-white">
                        <img
                            src={hokey}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute rounded-lg bottom-0 left-0 right-0 h-24 p-3 space-y-2  bg-black/20 backdrop-blur-md">
                            <p className="text-xs opacity-80 dm-sans">
                                Day 5 Highlights
                            </p>
                            <p className="text-sm font-semibold">
                                Baku 2023 World Taekwondo Championships
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#EBEEF3] p-4 rounded-lg w-full h-90 flex flex-col gap-4">

                        {news.map((item) => (
                            <div key={item.id} className="flex gap-3">
                                <img
                                    src={item.img}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 dm-sans">
                                        {item.tag} · {item.date}
                                    </p>
                                    <p className="text-md font-medium">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <button className="bg-gray-300 text-sm px-3 py-1 rounded w-fit">
                            More →
                        </button>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold mb-6">
                    Clubs Ranking
                </h2>
                <div className="bg-[#EBEEF3] rounded-lg overflow-hidden">
                    <table className="w-full h-91 text-sm">
                        <thead className="bg-gray-200">

                            <tr className="text-left">

                                <th className="p-3">Club</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>F</th>
                                <th>A</th>
                                <th>GD</th>

                            </tr>

                        </thead>

                        <tbody>

                            {clubs.map((club, index) => (

                                <tr key={index} className="border-t">

                                    <td className="p-3 flex items-center gap-3 font-medium">

                                        <span className="text-gray-500">
                                            {index + 1}
                                        </span>

                                        <img
                                            src={club.logo}
                                            className="w-6 h-6"
                                        />

                                        {club.name}

                                    </td>

                                    <td>{club.gp}</td>
                                    <td>{club.w}</td>
                                    <td>{club.d}</td>
                                    <td>{club.l}</td>
                                    <td>{club.f}</td>
                                    <td>{club.a}</td>
                                    <td>{club.gd}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </motion.div>
          
        </div>

    )

}