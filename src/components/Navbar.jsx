import { MenuIcon, Search, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-7xl h-20 mx-auto bg-[#EBEEF3]">
      <div className="relative flex justify-between items-center mx-auto bg-white w-full h-20 px-5 md:px-10 ">

      
        <img
          className="w-28 md:w-32 lg:w-40 h-12 object-contain"
          src={logo}
          alt="sports news"
        />

        <ul className="hidden dm-sans md:flex gap-3 lg:gap-8 text-sm text-[#343536]">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Category</li>
          <li className="hover:text-black cursor-pointer">Trending News</li>
          <li className="hover:text-black cursor-pointer">Recent News</li>
          <li className="hover:text-black cursor-pointer">Clubs Ranking</li>
          <li className="hover:text-black cursor-pointer">Sports Article</li>
        </ul>

     
        <button className="hidden md:flex items-center dm-sans w-23 gap-2 px-4 h-9 rounded-lg text-white bg-[#B8C2CE] text-xs">
          <Search size={18} />
          Search
        </button>
     <MenuIcon
  onClick={() => setShow(true)}
  className="md:hidden cursor-pointer"
  size={32}
/>

<div
  className={`fixed inset-0 z-50 flex flex-col transform transition-transform duration-500 ease-in-out 
  ${show ? "translate-x-0" : "translate-x-full"} 
  bg-[#EBEEF3]/95 backdrop-blur-md`}
>


  <div className="flex justify-end p-6">
    <X
      onClick={() => setShow(false)}
      size={34}
      className="cursor-pointer hover:rotate-90 transition-transform duration-300"
    />
  </div>


  <ul className="flex flex-col dm-sans items-center gap-5 text-xl font-semibold mt-10">

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Home
    </li>

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Category
    </li>

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Trending News
    </li>

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Recent News
    </li>

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Clubs Ranking
    </li>

    <li className="w-64 text-center py-1 border-b border-gray-300 cursor-pointer 
    hover:text-black hover:scale-105 transition">
      Sports Article
    </li>

  </ul>

</div>
      </div>
    </div>
  );
}