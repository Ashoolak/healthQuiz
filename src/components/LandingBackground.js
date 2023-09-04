import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

const LandingBackground = () => {
  const [particleNumber, setParticleNumber] = useState(30);

  useEffect(() => {
    setParticleNumber(window.innerWidth < 768 ? 20 : 50);
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Particles
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        params={{
          particles: {
            number: { value: particleNumber },
            size: { random: true, value: 40 },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            move: { speed: 1 },
            color: { value: ['#0d47a1', '#6200ea'] },
            collisions: { enable: false }, // Add this line
          },
        }}
      />
    </div>
  );
};

export default LandingBackground;
