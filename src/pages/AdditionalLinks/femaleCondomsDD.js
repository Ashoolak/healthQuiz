import Link from 'next/link';
import React from 'react';

export default function femaleCondomsDD() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col justify-center">
      <div className="mb-2 md:mb-16">
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
          Female (Internal) Condom: Dos and Don’ts
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 w-full mt-10">
        <div className="w-9/10 md:w-2/5 bg-orange-200 p-6 rounded-xl shadow-2xl space-y-4">
          <h2 className="text-2xl font-bold mb-3">Do's</h2>
          {condomDos.map((item, index) => (
            <li
              key={index}
              className={`shadow-md p-2 rounded-lg list-item fade-in-left ${
                item.icon === 'check' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="material-icons-outlined text-lg">
                {item.icon}
              </span>
              <p className="ml-3 text-lg">{item.text}</p>
            </li>
          ))}
        </div>

        <div className="w-9/10 md:w-2/5 bg-orange-200 p-6 rounded-xl shadow-2xl space-y-4 donts">
          <h2 className="text-2xl font-bold mb-3">Don'ts</h2>
          {condomDonts.map((item, index) => (
            <li
              key={index}
              className={`shadow-md p-2 rounded-lg list-item fade-in-left ${
                item.icon === 'check' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="material-icons-outlined text-lg">
                {item.icon}
              </span>
              <p className="ml-3 text-lg">{item.text}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

const condomDos = [
  {
    icon: 'check',
    text: 'DO use a female (internal) condom from start to finish, every time you have vaginal sex.',
  },
  {
    icon: 'check',
    text: 'DO read the condom package insert and check the expiration date.',
  },
  { icon: 'check', text: 'DO make sure there are no tears or defects.' },
  {
    icon: 'check',
    text: 'DO use lubricant to help prevent the condom from slipping and tearing.',
  },
  { icon: 'check', text: 'DO store condoms in a cool, dry place.' },
];

const condomDonts = [
  {
    icon: 'close',
    text: "DON'T use a male (external) condom with an female (internal) condom, as this can cause tearing.",
  },
  {
    icon: 'close',
    text: "DON'T reuse a condom.",
  },
  {
    icon: 'close',
    text: "DON'T flush condoms as they may clog the toilet.",
  },
];
