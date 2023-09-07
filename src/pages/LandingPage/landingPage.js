import React from 'react';
import LandingBackground from './landingBackground';

const PrepareImage = '/images/prepare.png';

export default function LandingPage(props) {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center z-10 relative">
      <div className="background-container h-screen w-screen relative">
        <LandingBackground />
      </div>
      <div className="image-container relative z-20 text-center">
        <img
          src={PrepareImage}
          alt="Prepare"
          className="max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto"
        />
        <button
          onClick={props.onClick}
          className="primary-button mt-4 bg-green-500 text-white font-bold py-4 px-8 text-xl md:text-2xl lg:text-3xl rounded-full border-white border-4 shadow-lg hover:bg-green-600"
        >
          Begin Quiz!
        </button>
      </div>
    </div>
  );
}
