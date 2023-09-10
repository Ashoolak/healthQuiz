import React, { useState } from 'react';

export default function Question2(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [showExtraIDK, setShowExtraIDK] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);
  const [clickedIDK, setClickedIDK] = useState(false);

  return (
    <div
      id="question2"
      className={`question-background-2 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="w-full md:w-1/2 align-centre m-auto font-sans">
        <div className="content-container">
          <span className="font-bold block text-center">
            Answer <i>yes</i>, <i>no</i>, or <i>I don't know</i> to the
            following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Have you ever had an STI, including HIV?
          </div>
          <div className="horizontal-line my-8"></div>
          <button
            onClick={() => {
              setShowExtraYes(true);
              setShowExtraNo(false);
              setShowExtraIDK(false);
              setClickedYes(true);
              setClickedNo(false);
              setClickedIDK(false);
            }}
            className={`question-button ${clickedYes ? 'clicked' : ''}`} // Corrected the backticks
          >
            Yes
          </button>

          {showExtraYes && (
            <div className="expanded-text text-lg">
              <p>
                Having had an STI before could place you at greater risk of
                having or getting one now. That’s because engaging in the same
                or similar sexual behaviors could place you at risk now. Some
                infections are also associated with HIV – having one of these
                infections could put you at greater risk for also getting or
                transmitting HIV.
              </p>
              <br className="smaller-break" />
              <p>
                Be sure to tell your healthcare provider if you have had STIs
                before. They are common, so no judgment! This will help them
                make sure they’re giving you the best prevention advice. This
                can include offering you STI testing and treatment, including
                medication to prevent or treat HIV infection, if you need it.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 3 of 6 &gt;
                </button>
              </div>
            </div>
          )}

          <div className="horizontal-line my-8"></div>

          <button
            onClick={() => {
              setShowExtraYes(false);
              setShowExtraNo(true);
              setShowExtraIDK(false);
              setClickedYes(false);
              setClickedNo(true);
              setClickedIDK(false);
            }}
            className={`question-button ${clickedNo ? 'clicked' : ''}`} // Corrected the backticks
          >
            No
          </button>

          {showExtraNo && (
            <div className="expanded-text text-lg">
              Did you know that having had an STI before could place you at
              greater risk of having or getting one now? That’s because engaging
              in the same or similar sexual behaviors could place you at risk
              now. Some infections are also associated with HIV – having one of
              these infections could put you at greater risk for also getting or
              transmitting HIV. Continue choosing the prevention methods that
              work for you!
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 3 of 6 &gt;
                </button>
              </div>
            </div>
          )}
          <div className="horizontal-line my-8"></div>

          <div className="horizontal-line my-8"></div>

          <button
            onClick={() => {
              setShowExtraYes(false);
              setShowExtraNo(false);
              setShowExtraIDK(true);
              setClickedYes(false);
              setClickedNo(false);
              setClickedIDK(true);
            }}
            className={`question-button ${clickedIDK ? 'clicked' : ''}`}
          >
            I don't know
          </button>

          {showExtraIDK && (
            <div className="expanded-text text-lg">
              If you don’t know, that’s okay! These infections don’t always
              cause symptoms or may only cause mild symptoms. So, it is possible
              to have had an infection and not known it. That is why getting a
              test, or talking to your healthcare provider about testing, is
              important if you are having sex. If you are diagnosed with an STI,
              know that all are treatable with medicine, and some are curable
              entirely. Or maybe you’ve never had one. Either way, continue
              choosing the prevention methods that work for you!
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 3 of 6 &gt;
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
