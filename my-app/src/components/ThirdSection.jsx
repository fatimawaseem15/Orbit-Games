import React from "react";
import person1 from './Images/person1.png';
import person2 from './Images/person2.png';
import person3 from './Images/person3.png';
import CardImageComponent from './CardImageComponent';

const ThirdSection = () => {
  return (
    <div className="ThirdSection mx-10 flex flex-col items-center justify-center">
      <div className="m-10 mx-10 my-3 flex flex-col md:flex-row justify-center items-center p-4 rounded-lg">
        <span className="text-white text-center" style={{ fontFamily: 'Michroma, sans-serif', fontSize: 30, fontStyle: 'normal' }}>
          Meet the Team
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        <CardImageComponent imageUrl={person1} position="Developer" />
        <CardImageComponent imageUrl={person2} position="Designer" />
        <CardImageComponent imageUrl={person3} position="Project Manager" />
      </div>
      <div className="flex flex-wrap justify-center">
        <CardImageComponent imageUrl={person1} position="Developer" />
        <CardImageComponent imageUrl={person2} position="Designer" />
        <CardImageComponent imageUrl={person3} position="Project Manager" />
      </div>
    </div>
  );
};

export default ThirdSection;
