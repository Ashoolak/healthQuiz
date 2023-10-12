import Link from 'next/link';
import React from 'react';

export default function maleCondomsDD() {
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
          Male (External) Condom: Dos and Don’ts
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 w-full mt-10">
        <div className="w-9/10 md:w-2/5 bg-orange-200 p-6 rounded-xl shadow-2xl space-y-4">
          <h2 className="headline text-3xl font-bold mb-3 p-2 rounded-lg text-white shadow-md">
            <span className="material-icons-outlined mr-2">thumb_up</span>
            Do's
          </h2>
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
          <h2 className="headline text-3xl font-bold mb-3 p-2 rounded-lg text-white shadow-md">
            <span className="material-icons-outlined mr-2">thumb_down</span>
            Don'ts
          </h2>
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
  { icon: 'check', text: 'DO use a condom every time you have sex.' },
  { icon: 'check', text: 'DO put on a condom before having sex.' },
  { icon: 'check', text: 'DO read the package and check the expiration date.' },
  { icon: 'check', text: 'DO make sure there are no tears or defects.' },
  { icon: 'check', text: 'DO store condoms in a cool, dry place.' },
  { icon: 'check', text: 'DO use latex or polyurethane condoms.' },
  {
    icon: 'check',
    text: 'DO use water-based or silicone-based lubricant to prevent breakage.',
  },
];

const condomDonts = [
  {
    icon: 'close',
    text: 'DON’T store condoms in your wallet as heat and friction can damage them.',
  },
  {
    icon: 'close',
    text: 'DON’T use nonoxynol-9 (a spermicide), as this can cause irritation.',
  },
  {
    icon: 'close',
    text: 'DON’T use oil-based products like baby oil, lotion, petroleum jelly, or cooking oil because they will cause the condom to break.',
  },
  { icon: 'close', text: 'DON’T use more than one condom at a time.' },
  { icon: 'close', text: 'DON’T reuse a condom.' },
];
