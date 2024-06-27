import React from "react";
import game1 from './Images/game1.png';
import game2 from './Images/game2.png';
import game3 from './Images/game3.png';

export default function GameSection() {
  return (
    <div className="Gamebox">
      <div className="m-10 mx-10 my-3 flex flex-col md:flex-row justify-between items-center p-4 rounded-lg" style={{ borderRadius: '20px', border: '1px solid #2E2E31' }}>
        <span className="text-white ml-5 mb-4 md:mb-0" style={{ fontFamily: 'Michroma, sans-serif', fontSize: 30, fontStyle: 'normal' }}>Game</span>
        <button className="bg-[#303135] text-white px-4 py-2 rounded hover:bg-[#212229] md:mr-5 order-last md:order-none">View More</button>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="relative w-80 border border-solid border-gray-200 rounded-2xl transition-all duration-500 m-4">
          <div className="block overflow-hidden">
            <img src={game1} alt="Game1 Image" className="w-full h-48 object-cover" />
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold text-white mb-2 capitalize transition-all duration-500" style={{ fontFamily: 'Poppins, sans-serif' }}>Game #1</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">Fair Web3 gaming, earn through skill, and leverage our framework that rewards every play and innovation...</p>
            <button className="bg-[#212229] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-[#303135]">Read More</button>
          </div>
        </div>
        <div className="relative w-80 border border-solid border-gray-200 rounded-2xl transition-all duration-500 m-4">
          <div className="block overflow-hidden">
            <img src={game2} alt="Game2 Image" className="w-full h-48 object-cover" />
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold text-white mb-2 capitalize transition-all duration-500" style={{ fontFamily: 'Poppins, sans-serif' }}>Game #2</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">Fair Web3 gaming, earn through skill, and leverage our framework that...</p>
            <button className="bg-[#212229] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-[#303135]">Read More</button>
          </div>
        </div>
        <div className="relative w-80 border border-solid border-gray-200 rounded-2xl transition-all duration-500 m-4">
          <div className="block overflow-hidden">
            <img src={game3} alt="Game3 Image" className="w-full h-48 object-cover" />
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold text-white mb-2 capitalize transition-all duration-500" style={{ fontFamily: 'Poppins, sans-serif' }}>Game #3</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">Fair Web3 gaming, earn through skill, and leverage our framework that...</p>
            <button className="bg-[#212229] shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-[#303135]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
