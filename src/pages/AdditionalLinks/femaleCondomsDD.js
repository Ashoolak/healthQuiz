import Link from 'next/link';
import React from 'react';

export default function femaleCondomsDD() {
  return (
    <div className="bg-gray-900 text-white h-screen p-8 flex flex-col justify-center">
      <div className="mb-10">
        <div className="absolute top-8 left-8 flex items-center">
          <Link
            href="/CompletionPage/completionPage"
            className="flex items-center bg-gray-700 p-2 rounded-lg transition duration-300 hover:bg-white hover:text-gray-900"
          >
            <span className="material-icons-outlined mr-2">arrow_back</span>
            <p className="mr-3">Back</p>
          </Link>
        </div>

        <h1 className="absolute top-8 left-1/4 w-1/2 text-center text-2xl font-extrabold tracking-widest text-orange-400 border-b-4 border-orange-300">
          Female (Internal) Condom: Dos and Don’ts
        </h1>
      </div>

      <div className="flex justify-center space-x-8 w-full">
        <div className="w-2/5 bg-orange-200 p-6 rounded-xl shadow-2xl space-y-4">
          <h2 className="text-2xl font-bold mb-3">Do's</h2>
          {condomDos.map((item, index) => (
            <li
              key={index}
              className={`flex items-center shadow-md p-2 rounded-lg ${
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

        <div className="w-2/5 bg-orange-200 p-6 rounded-xl shadow-2xl space-y-4">
          <h2 className="text-2xl font-bold mb-3">Don'ts</h2>
          {condomDonts.map((item, index) => (
            <li
              key={index}
              className={`flex items-center shadow-md p-2 rounded-lg ${
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
