import React from "react";
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import TextCard from "./TextCard";

// Import icons for different text cards
import icon1 from './Images/icons/icon1.png';
import icon2 from './Images/icons/icon2.png';
import icon3 from './Images/icons/icon3.png';

export default function SecondSection() {
  return (
    <div className="SecondSection">
      <div className="m-10 mx-10 my-3 flex flex-col md:flex-row justify-center items-center p-4 rounded-lg">
        <span className="text-white text-center" style={{ fontFamily: 'Michroma, sans-serif', fontSize: 30, fontStyle: 'normal' }}>
          Web3 Gaming Unleashed <br /> on Orb Games
        </span>
      </div>

      {/* First Image Card and Text Card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="max-w-xl w-full md:w-2/3 bg-white border border-solid border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <img src={image1} alt="Game 1" className="w-full h-auto object-cover rounded-t-2xl" style={{ maxHeight: 400 }} />
        </div>
        <TextCard
          icon={icon3}
          heading="Innovative"
          heading2="Additional Heading"
          paragraph="Play-to-Earn Model. Orbit Games implements a fair, sustainable, and accessible play-to-earn model, ensuring every player has the opportunity to earn rewards through skillful play."
          className="w-full md:w-1/2 mt-4 md:mt-0"
        />
      </div>

      {/* Second Image Card and Text Card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="max-w-xl w-full md:w-2/3 bg-white border border-solid border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <img src={image2} alt="Game 2" className="w-full h-auto object-cover rounded-t-2xl" style={{ maxHeight: 400 }} />
        </div>
        <TextCard
          icon={icon1}
          heading="Expansive Game"
          heading2=" Selection "
          paragraph="Orbit Games offers a wide range of games across genres. Dive into action, strategy, puzzles, and more, each with unique earning opportunities."
          className="w-full md:w-1/2 mt-4 md:mt-0"
        />
      </div>

      {/* Third Image Card and Text Card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="max-w-xl w-full md:w-2/3 bg-white border border-solid border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <img src={image3} alt="Game 3" className="w-full h-auto object-cover rounded-t-2xl" style={{ maxHeight: 400 }} />
        </div>
        <TextCard
          icon={icon2}
          heading="Developer "
          heading2="Empowerment"
          paragraph="Offering compelling incentives, enabling developers and studios to easily monetize their creations and thrive in our ecosystem. "
          className="w-full md:w-1/2 mt-4 md:mt-0"
        />
      </div>
    </div>
  );
}
