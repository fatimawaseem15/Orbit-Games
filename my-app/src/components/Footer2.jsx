// import React from 'react';
// import logo from './Images/logo.png';

// const Footer = () => {
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-900 p-6">
//       <footer className="bg-gray-900 p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
//           <div className="p-4 flex flex-col border-r-0 sm:border-r-2 border-gray-800-500 text-white">
//             <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto mb-4 sm:mb-0" />
//             <p className='m-3 sm:m-5 text-[#A1A1A1] text-center sm:text-left'>
//               Fair Web3 gaming, earn through skill, and leverage our framework that rewards every play and innovation
//             </p>
//             <div className="p-4 m-3 sm:m-4">
//               <h2 className="text-lg font-bold text-white mb-2">Quick Links</h2>
//               <ul className="flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-4 text-white justify-center sm:justify-start">
//                 <li><a href="#home" className="hover:underline">Home</a></li>
//                 <li><a href="#about" className="hover:underline">About</a></li>
//                 <li><a href="#team" className="hover:underline">Team</a></li>
//                 <li><a href="#group" className="hover:underline">Group</a></li>
//                 <li><a href="#contact" className="hover:underline">Contact Us</a></li>    
//               </ul>
//             </div>
//           </div>
//           <div className="p-4 text-white m-3 sm:m-10">
//             <h2 className="text-lg font-bold mb-2"><span>Join the Play-to-Earn </span> <br />Revolution with Us</h2>
//             <p className='text-[#A1A1A1] mt-3 sm:mt-5 text-center sm:text-left'>
//               Embrace the future of gaming with us and experience the Play-to-Earn revolution firsthand.
//               Join our community today and start earning rewards through skillful play.
//             </p>
//             <div className="p-4 flex justify-center sm:justify-start items-center mt-3 sm:mt-4">
//               <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center">
//                 Join the Orbit Games
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Horizontal Divider Line */}
//         <div className="border-t border-gray-800 mx-4 lg:mx-8 my-6 sm:my-8"></div>

//         {/* Bottom Line */}
//         <div className="text-xs text-center sm:text-left py-2 sm:py-4" style={{ fontFamily: 'Poppins', fontSize: '20px' }}>
//           <p className="text-gray-400">© 2024 Orbit Games. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import logo from './Images/logo.png';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-900 p-6">
      <footer className="bg-gray-900 p-6 flex flex-col sm:flex-row">
        <div className="p-4 flex flex-col border-r-0 sm:border-r-2 border-gray-800 text-white mb-6 sm:mb-0">
          <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto mb-4 sm:mb-0" />
          <p className='m-3 sm:m-5 text-[#A1A1A1] text-center sm:text-left'>
            Fair Web3 gaming, earn through skill, and leverage our framework that rewards every play and innovation
          </p>
          <div className="p-4">
            <h2 className="text-lg font-bold text-white mb-2">Quick Links</h2>
            <ul className="flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-4 text-white justify-center sm:justify-start">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
              <li><a href="#group" className="hover:underline">Group</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>    
            </ul>
          </div>
        </div>
        <div className="p-4 text-white m-3 sm:m-10 flex flex-col">
          <h2 className="text-lg font-bold mb-2"><span>Join the Play-to-Earn </span> <br />Revolution with Us</h2>
          <p className='text-[#A1A1A1] mt-3 sm:mt-5 text-center sm:text-left'>
            Embrace the future of gaming with us and experience the Play-to-Earn revolution firsthand.
            Join our community today and start earning rewards through skillful play.
          </p>
          <div className="p-4 flex justify-center sm:justify-start items-center mt-3 sm:mt-4">
            <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center">
              Join the Orbit Games
            </button>
          </div>
        </div>
      </footer>

      {/* Horizontal Divider Line */}
      <div className="border-t border-gray-800 mx-4 lg:mx-8 my-6 sm:my-8"></div>

      {/* Bottom Line */}
      <div className="text-xs text-center sm:text-left py-2 sm:py-4" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
        <p className="text-gray-400">© 2024 Orbit Games. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
