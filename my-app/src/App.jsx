import './App.css';
import React from 'react';
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



function App() {
  return (
    <div className="App bg-cover h-screen" style={{backgroundImage: `url(${bg})`}}>
      <Header />
      <FirstSection /> 
      <Banner/>
      <MainImage/>
      <GameSection/>
      <SecondSection/>
      <ThirdSection/>
      <FooterComponent/>
      <Footer2/>
    </div>
  );
}

export default App;
