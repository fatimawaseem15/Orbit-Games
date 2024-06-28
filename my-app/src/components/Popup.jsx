import React from 'react';

const Popup = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-screen-lg w-70vw h-80vh md:h-20vh overflow-hidden m-7">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-500 w-10 h-10 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row h-full bg-[#1A1B22]">
          <div className="md:w-1/3 h-60 md:h-full">
            <img src={imageSrc} alt="Popup" className="w-full h-full object-cover rounded-lg m-6" />
          </div>
          <div className="md:w-2/3 p-6 m-4 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Michroma, sans-serif', fontSize: 24 }}>
                Valorant
              </h2>
              <p className="text-gray-700 mb-4">
                Valorant is a fast-paced, tactical first-person shooter where players engage in strategic team-based combat using a diverse cast of heroes and their unique abilities.
              </p>
              <div className="mb-4">
                <span className="font-bold bg-orange text-white px-2 py-1 rounded" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16 }}>Developer:</span>
                <span className="ml-2 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, backgroundColor: '#FF7136', padding: '0.5rem', borderRadius: '0.25rem' }}>Riot Games</span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Status:</span> <span className="ml-14 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, backgroundColor: '#0E101C', padding: '0.5rem', borderRadius: '0.25rem' }}>Launched</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <button className="mt-4 md:mt-0 bg-[#FF7136] text-white px-4 py-2 rounded hover:bg-[#FC5104]">
                Play Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
