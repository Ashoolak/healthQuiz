import React, { useState, useEffect } from 'react';
import styles from './completionPage.module.css';

export default function CompletionPage() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div
      id="completionPage"
      className={`${styles['completion-background']} h-screen flex flex-col justify-start items-center`}
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
      <div className="flex flex-col justify-center items-center flex-grow mb-20">
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <button className="primary-button w-[200px]">
            Male (External) Condom: Dos and Don’ts
          </button>
          <button className="primary-button w-[200px]">
            How to put a Male (External) Condom
          </button>
        </div>
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <button className="primary-button w-[200px]">
            Female (Internal) Condom: Dos and Don’ts
          </button>
          <button className="primary-button w-[200px]">
            How To Insert and Remove a Female (Internal) Condom
          </button>
        </div>
        <div className="flex flex-row justify-between w-11/12 gap-4 mb-4">
          <button className="primary-button w-[200px]">
            Screening Recommendations for Sexually Transmitted Infections
          </button>
          <button className="primary-button w-[200px]">
            Find Free, Fast, and Confidential Testing Near You
          </button>
        </div>
      </div>

      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
    </div>
  );
}
