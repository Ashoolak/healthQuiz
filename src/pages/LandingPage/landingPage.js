import React from 'react';

export default function MergedLandingPage(props) {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center relative">
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
