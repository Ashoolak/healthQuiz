import React from 'react';
import Link from 'next/link';

export default function ScreeningRecommendation() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col justify-center">
      <div className="mb-10 md:mb-28">
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
          Screening Recommendations for Sexually Transmitted Infections
        </h1>
      </div>

      <div className="py-10 px-4 md:px-20 bg-gradient-to-br from-purple-100 via-blue-200 to-indigo-100 text-black rounded-lg shadow-xl">
        <p className="mb-6 text-lg">
          If you are sexually active, getting tested for STDs is one of the most
          important things you can do to protect your health. Make sure you have
          an open and honest conversation about your sexual history and STD
          testing with your doctor and ask whether you should be tested for
          STDs. If you are not comfortable talking with your regular health care
          provider about STDs, there are many clinics that provide confidential
          and free or low-cost testing.
        </p>

        <h2 className="mt-6 text-xl md:text-2xl font-bold mb-4 text-center">
          STD Testing Recommendations Overview
        </h2>

        <ul className="list-disc pl-5 space-y-4">
          <li className="text-lg">
            All adults and adolescents from ages 13 to 64 should be tested at
            least once for HIV.
          </li>
          <li className="text-lg">
            All sexually active women younger than 25 years should be tested for
            gonorrhea and chlamydia every year. Women 25 years and older with
            risk factors such as new or multiple sex partners or a sex partner
            who has an STD should also be tested for gonorrhea and chlamydia
            every year.
          </li>
          <li className="text-lg">
            Everyone who is pregnant should be tested for syphilis, HIV,
            hepatitis B, and hepatitis C starting early in pregnancy. Those at
            risk for infection should also be tested for chlamydia and gonorrhea
            starting early in pregnancy. Repeat testing may be needed in some
            cases.
          </li>
          <li className="text-lg">
            All sexually active gay, bisexual, and other men who have sex with
            men should be tested:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                At least once a year for syphilis, chlamydia, and gonorrhea.
                Those who have multiple or anonymous partners should be tested
                more frequently (e.g., every 3 to 6 months).
              </li>
              <li>
                At least once a year for HIV and may benefit from more frequent
                HIV testing (e.g., every 3 to 6 months).
              </li>
              <li>At least once a year for hepatitis C, if living with HIV.</li>
            </ul>
          </li>
          <li className="text-lg">
            Anyone who engages in sexual behaviors that could place them at risk
            for infection or shares injection drug equipment should get tested
            for HIV at least once a year.
          </li>
          <li className="text-lg">
            People who have had oral or anal sex should talk with their
            healthcare provider about throat and rectal testing options.
          </li>
        </ul>
      </div>
    </div>
  );
}
