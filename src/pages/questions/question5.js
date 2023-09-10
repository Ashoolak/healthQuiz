import React, { useState } from 'react';

export default function Question5(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);

  return (
    <div
      id="question5"
      className={`question-background-5 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="w-full md:w-1/2 align-centre m-auto font-sans">
        <div className="content-container">
          <span className="font-bold block text-center">
            Answer <i>yes</i> or <i>no</i> to the following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Have you exchanged sex for needs (money, housing, drugs, etc.) in
            the past 12 months?
          </div>
          <div className="horizontal-line my-8"></div>
          <button
            onClick={() => {
              setShowExtraYes(true);
              setShowExtraNo(false);
              setClickedYes(true); // Update state
              setClickedNo(false); // Update state
            }}
            className={`question-button ${clickedYes ? 'clicked' : ''}`} // Corrected the backticks
          >
            Yes
          </button>

          {showExtraYes && (
            <div className="expanded-text text-lg">
              <p>
                People who exchange sex are at increased risk of getting or
                transmitting HIV and other STIs because they are more likely to
                engage in behaviors such as sex without a condom, sex with
                multiple partners, and substance use.
              </p>
              <br className="smaller-break" />
              <p>
                If you exchange sex, it’s important to get tested regularly for
                HIV and other STIs. This information can help you choose the
                prevention steps that work for you, including condoms and
                medication to prevent or treat HIV infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 6 of 6 &gt;
                </button>
              </div>
            </div>
          )}

          <div className="horizontal-line my-8"></div>

          <button
            onClick={() => {
              setShowExtraNo(true);
              setShowExtraYes(false);
              setClickedNo(true);
              setClickedYes(false);
            }}
            className={`question-button ${clickedNo ? 'clicked' : ''}`}
          >
            No
          </button>

          {showExtraNo && (
            <div className="expanded-text text-lg">
              <p>
                Exchanging sex can increase the risk of getting or transmitting
                HIV and other STIs because it can involve behaviors such as sex
                without a condom, sex with multiple partners, and substance use.
              </p>
              <br className="smaller-break" />
              <p>
                If you exchange sex, it’s important to get tested regularly for
                HIV and other STIs. This information can help you choose the
                prevention steps that work for you, including condoms and
                medication to prevent or treat HIV infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 6 of 6 &gt;
                </button>
              </div>
            </div>
          )}
          <div className="horizontal-line my-8"></div>
        </div>
      </div>
    </div>
  );
}
