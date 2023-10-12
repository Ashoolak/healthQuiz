import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function howToMale() {
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
          Male (External) Condom Use
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
          The Right Way To Use A Male (External) Condom
        </h2>
        <img
          src="/images/theRightWayToUseAMaleCondom.png"
          alt="How to use male condom"
          className="w-6/7 md:w-3/5 mx-auto rounded-md shadow-lg"
        />

        {/* Button linking to Dos and Don'ts page */}
        <div className="flex justify-center w-full mt-6">
          <Link
            href="/AdditionalLinks/maleCondomsDD"
            className="text-sm md:text-lg px-6 py-3 bg-orange-300 hover:bg-orange-400 text-black font-semibold rounded-full transition duration-300 ease-in-out shadow-md flex items-center justify-center w-3/4"
          >
            <span>Learn More About Male Condom Dos & Don'ts</span>
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
            How To Put On and Take Off a Male (External) Condom
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <img
                  src={`/images/maleHow${index + 1}.jpeg`}
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
      return 'Carefully open and remove condom from wrapper.';
    case 2:
      return 'Place condom on the head of the erect, hard penis. If uncircumcised, pull back the foreskin first.';
    case 3:
      return 'Pinch air out of the tip of the condom.';
    case 4:
      return 'Unroll condom all the way down the penis.';
    case 5:
      return 'After sex but before pulling out, hold the condom at the base. Then pull out, while holding the condom in place.';
    case 6:
      return 'Carefully remove the condom and throw it in the trash.';
    default:
      return '';
  }
};
