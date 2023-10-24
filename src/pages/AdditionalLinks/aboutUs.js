import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-10">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">About Us</h1>

      <div className="bg-white max-w-2xl shadow-lg rounded-lg p-6 mb-6">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Our Team
          </h2>
          <p className="text-gray-600">
            We are Yann Cornil, Associate Professor of Marketing and Behavioural
            Science, and Jen Park, Assistant Professor of Marketing and
            Behavioural Science, from the University of British Columbia, Sauder
            School of Business.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            This website was designed to provide users with information on
            sexual health, and to investigate how different website features
            impact navigation on the website.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Learn More
          </h2>
          <p className="text-gray-600 mb-4">
            More about this project will be posted on{' '}
            <a
              href="http://www.yanncornil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              www.yanncornil.com
            </a>{' '}
            in the near future.
          </p>
        </div>
      </div>
    </div>
  );
}
