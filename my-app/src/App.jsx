import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import Banner from './components/Banner';
import bg from './components/Images/bg.png';
import MainImage from './components/MainImage';
import GameSection from './components/GameSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FooterComponent from './components/Footer';
import Footer2 from './components/Footer2';
import Popup from './components/Popup';
import PopupImage from './components/Images/popup.png';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App bg-cover h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isPopupOpen && (
          <Popup imageSrc={PopupImage} onClose={handleClosePopup} />
        )}
        <Header />
        <FirstSection />
        <Banner />
        <MainImage />
        <GameSection />
        <SecondSection />
        <ThirdSection />
        <FooterComponent />
        <Footer2 />
      </div>
    </div>
  );
};

export default App;
