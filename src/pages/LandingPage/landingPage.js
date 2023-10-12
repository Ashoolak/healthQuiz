import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

export default function MergedLandingPage(props) {
  const [particleNumber, setParticleNumber] = useState(30);

  useEffect(() => {
    setParticleNumber(window.innerWidth < 768 ? 20 : 50);
    // Update particle number if window is resized
    const handleResize = () => {
      setParticleNumber(window.innerWidth < 768 ? 20 : 50);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center relative">
      <Particles
        className="absolute inset-0"
        params={{
          particles: {
            number: { value: particleNumber },
            size: { random: true, value: 40 },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            move: { speed: 1, out_mode: 'bounce' },
            color: { value: ['#0d47a1', '#6200ea'] },
            collisions: { enable: false },
          },
        }}
      />
      <div className="relative z-3 text-center">
        <img
          src="/images/prepare.png"
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
