import React from 'react';
import Link from 'next/link';

export default function howToFemale() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col justify-center">
      <div className="mb-10 md:mb-16">
        <div className="flex items-center justify-center mt-4 md:absolute md:mt-0 md:top-8 md:left-8">
          <Link
            href="/CompletionPage/completionPage"
            className="flex items-center bg-gray-700 p-2 rounded-lg transition duration-300 hover:bg-white hover:text-gray-900"
          >
            <span className="material-icons-outlined mr-2">arrow_back</span>
            <p className="mr-3">Back to Completion Page</p>
          </Link>
        </div>
        <h1 className="mt-4 text-center text-2xl font-extrabold tracking-widest text-orange-400 border-b-4 border-orange-300 md:mt-0 md:absolute md:top-8 md:left-1/4 md:w-1/2">
          Female (Internal) Condom Use
        </h1>
      </div>

      {/* Warning Message */}
      <div className="flex items-center justify-center bg-yellow-400 p-4 rounded-md shadow-md mb-6">
        <div className="rounded-full bg-yellow-500 p-3 mr-4">
          <span className="material-icons-outlined text-white">warning</span>
        </div>
        <p className="text-lg md:text-xl text-black">
          This document contains sexually graphic images and may not be suitable
          for some audiences.
        </p>
      </div>

      {/* First Section */}
      <section className="my-10 w-full md:w-7/10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          The Right Way To Use A Female (Internal) Condom
        </h2>
        {/* Button linking to Dos and Don'ts page */}
        <div className="flex justify-center w-full mt-6">
          <Link
            href="/AdditionalLinks/femaleCondomsDD"
            className="text-sm md:text-lg px-6 py-3 bg-orange-300 hover:bg-orange-400 text-black font-semibold rounded-full transition duration-300 ease-in-out shadow-md flex items-center justify-center w-3/4"
          >
            <span>Learn More About Female Condom Dos & Don'ts</span>
            <span className="material-icons-outlined ml-2 align-middle">
              navigate_next
            </span>
          </Link>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="py-10 px-4 md:px-20 bg-gradient-to-br from-purple-100 via-blue-200 to-indigo-100 text-black rounded-lg shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">
            How To Insert and Remove a Female (Internal) Condom
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <img
                  src={`/images/femaleHow${index + 1}.jpeg`}
                  alt={`Step ${index + 1}`}
                  className="w-3/4 h-3/4 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <p className="mt-4 text-sm md:text-lg font-semibold">
                  {getImageCaption(index + 1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const getImageCaption = (step) => {
  switch (step) {
    case 1:
      return 'Carefully open and remove the condom from package to prevent tearing.';
    case 2:
      return 'The thick, inner ring with closed end is used for placing in the vagina and holds condom in place. The thin, outer ring remains outside of body, covering vaginal opening.';
    case 3:
      return 'Find a comfortable position. While holding outside of condom at closed end, squeeze sides of inner ring together with your thumb and forefinger and insert into vagina. It is similar to inserting a tampon.';
    case 4:
      return 'Using your finger, push inner ring as far up as it will go until it rests against cervix. The condom will expand naturally and you may not feel it.';
    case 5:
      return 'Be sure condom is not twisted. The thin, outer ring should remain outside vagina.';
    case 6:
      return 'Guide partner’s penis into opening of the condom. Stop intercourse if you feel penis slip between condom and walls of vagina or if outer ring is pushed into vagina.';
    case 7:
      return 'To remove, gently twist outer ring and pull condom out of vagina.';
    case 8:
      return 'Throw away the condom in trash after using it one time. Do not reuse.';
    default:
      return '';
  }
};
