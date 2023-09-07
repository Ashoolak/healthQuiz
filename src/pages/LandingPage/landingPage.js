import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import './landingPage.module.css';

export default function MergedLandingPage(props) {
  // Moved state and effect from LandingBackground to here
  const [particleNumber, setParticleNumber] = useState(30);

  useEffect(() => {
    setParticleNumber(window.innerWidth < 768 ? 20 : 50);
  }, []);

  const PrepareImage = '/images/prepare.png';

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center z-10 relative">
      <div className="background-container h-screen w-screen relative">
        {/* Moved Particles JSX here */}
        <Particles
          className="particles"
          params={{
            particles: {
              number: { value: particleNumber },
              size: { random: true, value: 40 },
              shape: { type: 'circle' },
              opacity: { value: 0.7, random: true },
              move: { speed: 1 },
              color: { value: ['#0d47a1', '#6200ea'] },
              collisions: { enable: false },
            },
          }}
        />
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
