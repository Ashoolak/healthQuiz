import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
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
      className={`${styles['completion-background']} h-screen flex justify-center items-center`}
    >
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles['completion-star']}>
        <div className={styles['completion-text']}>
          <h2 className="text-center font-bold">CONGRATULATION!</h2>
          <h3 className="text-center font-bold">You have completed the quiz</h3>
          <p className="text-center">
            Answering “yes” to one or more of the quiz questions means you may
            be at risk for an STI. It also means you may want to talk with a
            healthcare provider to determine what tests you need (if any).
          </p>
        </div>
      </div>
    </div>
  );
}
