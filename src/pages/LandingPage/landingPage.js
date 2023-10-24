import React, { useEffect, useState } from 'react';

export default function LandingPage(props) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set the initial size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Update the size whenever the window gets resized
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * (80 - 20) + 20; // Random size between 20 and 80
      const left = Math.random() * windowSize.width;
      const top = Math.random() * windowSize.height;
      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}px`,
            top: `${top}px`,
            position: 'absolute',
            borderRadius: '50%',
          }}
        ></div>
      );
    }
    return bubbles;
  };

  return (
    <div className="landing-background-1 relative">
      {createBubbles()}
      <div className="container mx-auto h-screen flex flex-col justify-center items-center relative">
        <div className="relative text-center">
          <img
            src="/images/prepare.png"
            alt="Prepare"
            className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto"
          />
          <button
            onClick={props.onClick}
            className="primary-button m-auto mt-4 bg-green-500 text-white font-bold py-4 px-8 text-xl md:text-2xl lg:text-3xl rounded-full border-white border-4 shadow-lg hover:bg-green-600"
          >
            Begin Quiz!
          </button>
        </div>
      </div>
    </div>
  );
}
