import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col justify-center">
      <div className="mb-10 md:mb-16">
        <div className="flex items-center justify-center mt-4 md:absolute md:mt-0 md:top-8 md:left-8">
          <Link
            href="/CompletionPage/completionPage"
            className="flex items-center bg-gray-700 p-2 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white"
          >
            <span className="material-icons-outlined mr-2">arrow_back</span>
            <p className="mr-3">Back to Completion Page</p>
          </Link>
        </div>
        <h1 className="mt-4 text-center text-4xl font-bold tracking-widest text-orange-400 border-b-4 border-orange-300 md:mt-0 md:absolute md:top-8 md:left-1/4 md:w-1/2">
          About Us
        </h1>
      </div>

      <div className="bg-white text-black max-w-2xl mx-auto rounded-lg p-6 mb-6">
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
