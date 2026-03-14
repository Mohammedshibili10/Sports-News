import React from 'react'
import city from '../assets/images/city.png'
import united from '../assets/images/united.png'
import arsanel from '../assets/images/arsanel.png'
import chelse from '../assets/images/chelse.png'
import liverpool from '../assets/images/liverpool.png'
import tottenham from '../assets/images/tottenham.png'

export default function Clubranking() {

  const teams = [
    { logo: city, club: "Manchester City", gp: 10, w: 7, d: 2, l: 1, f: 20, a: 8 },
    { logo: liverpool, club: "Liverpool", gp: 10, w: 6, d: 3, l: 1, f: 18, a: 9 },
    { logo: chelse, club: "Chelsea", gp: 10, w: 5, d: 2, l: 3, f: 15, a: 12 },
    { logo: tottenham, club: "Tottenham Hotspur", gp: 10, w: 4, d: 3, l: 3, f: 14, a: 13 },
    { logo: arsanel, club: "Arsenal", gp: 10, w: 3, d: 2, l: 5, f: 11, a: 16 },
    { logo: united, club: "Manchester United", gp: 10, w: 3, d: 2, l: 5, f: 11, a: 16 },
  ];

  return (
    <div className='max-w-7xl  '>
  <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <h2 className=" text-3xl font-semibold mb-4 inline pb-10 ">Club Ranking</h2>

      <div className="bg-[#E6E9EE] rounded-md w-full p-4  ">

        <table className="w-full text-center">

          <thead>
            <tr>
              <th className="p-3 text-left pl-6">Club</th>
              <th className="p-3">GP</th>
              <th className="p-3">W</th>
              <th className="p-3">D</th>
              <th className="p-3">L</th>
              <th className="p-3">F</th>
              <th className="p-3">A</th>
              <th className="p-3">GD</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="border-t border-gray-300">

                <td className="p-3 text-left">
                  <div className="flex items-center gap-2">
                    <span>{index + 1}</span>
                    <img className="w-6 h-6 object-contain" src={team.logo} alt={team.club} />
                    <span className="font-medium">{team.club}</span>
                  </div>
                </td>

                <td>{team.gp}</td>
                <td>{team.w}</td>
                <td>{team.d}</td>
                <td>{team.l}</td>
                <td>{team.f}</td>
                <td>{team.a}</td>
                <td>{team.f - team.a}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
 </motion.div>
    </div>
  )
}