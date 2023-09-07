import React from 'react';
import Confetti from 'react-confetti';

export default function CompletionPage() {
  return (
    <div
      id="completionPage"
      className="completion-background h-screen flex justify-center items-center"
    >
      <Confetti />
      <div className="completion-star">
        <h2 className="text-black text-center font-bold">CONGRATULATION!</h2>
        <br />
        <h3 className="text-black text-center font-bold">
          You have completed the quiz
        </h3>
        <br />
        <p className="text-black text-center">
          Answering “yes” to one or more of the quiz questions means you may be
          at risk for an STI. It also means you may want to talk with a
          healthcare provider to determine what tests you need (if any).
        </p>
        <br />
        <p className="text-black text-center">
          "Game Plan" resources on the next page can help you learn how to lower
          your risk for getting STIs. You can find and take the prevention steps
          that work for you. This information can help you learn how to stay
          healthy even if you answered “no” or “I don’t know” to the quiz
          questions.
        </p>
      </div>
      <div className="confetti"></div>
    </div>
  );
}
