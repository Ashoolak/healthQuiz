import React from 'react';
import styles from './completionPage.module.css';
import Link from 'next/link';

export default function CompletionPage() {
  return (
    <div
      id="completionPage"
      className={`${styles['completion-background']} min-h-screen flex flex-col justify-start items-center`}
    >
      <div className={`${styles['completion-text']}`}>
        <h2 className="text-center text-2xl font-bold">CONGRATULATION!</h2>
        <br />
        <h3 className="text-center text-large font-bold">
          You have completed the quiz
        </h3>
        <p className="text-center">
          Answering “yes” to one or more of the quiz questions means you may be
          at risk for an STI...
        </p>
      </div>

      {/* Retake the Quiz Button */}
      <div className="my-6">
        <Link
          href="/"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          <span className="material-icons-outlined mr-2">restart_alt</span>
          Retake the Quiz
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center flex-grow mb-20">
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <Link
            href="/AdditionalLinks/maleCondomsDD"
            className="primary-button w-[200px]"
          >
            Male (External) Condom: Dos and Don’ts
          </Link>
          <Link
            href="/AdditionalLinks/howToMale"
            className="primary-button w-[200px]"
          >
            How to put a Male (External) Condom On
          </Link>
        </div>
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <Link
            href="/AdditionalLinks/femaleCondomsDD"
            className="primary-button w-[200px]"
          >
            Female (Internal) Condom: Dos and Don’ts
          </Link>
          <Link
            href="/AdditionalLinks/howToFemale"
            className="primary-button w-[200px]"
          >
            How To Insert and Remove a Female (Internal) Condom
          </Link>
        </div>
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <Link
            href="/AdditionalLinks/screeningRecommendation"
            className="primary-button w-[200px]"
          >
            Screening Recommendations for Sexually Transmitted Infections
          </Link>
          <Link
            href="https://gettested.cdc.gov/"
            target="_blank"
            className="primary-button w-[200px]"
          >
            Find Free, Fast, and Confidential Testing Near You
          </Link>
        </div>
        <div className="flex flex-row justify-center w-8/12 mb-4">
          <Link
            href="/AdditionalLinks/aboutUs"
            className="primary-button w-[200px]"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
    </div>
  );
}
