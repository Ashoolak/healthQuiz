import React, { useState } from 'react';

export default function Question1(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [clickedYes, setClickedYes] = useState(false); // New state
  const [clickedNo, setClickedNo] = useState(false); // New state

  return (
    <div
      id="question1"
      className={`question-background-1 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="w-full md:w-1/2 align-centre m-auto font-sans">
        <div className="content-container">
          <span className="font-bold block text-center">
            Answer <i>yes</i> or <i>no</i> to the following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Have you had vaginal (penis in the vagina), anal (penis in the
            anus), or oral sex (mouth on penis, vagina, or anus) without a
            condom in the past 12 months?
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
                Correctly using condoms and other barriers every time you have
                sex can reduce the risk of STIs, including HIV.
              </p>
              <br className="smaller-break" />
              <p>
                There are other ways to reduce, or even avoid, STI risk. Choose
                the prevention steps that work for you, including medication to
                prevent or treat HIV infection.
              </p>
              <br className="smaller-break" />
              <p>Know your CONDOM DOs & DON’Ts.</p>
              <p>
                The Right Way to Use an External (Sometimes Called Male) Condom
              </p>
              <br className="smaller-break" />
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 2 of 6 &gt;
                </button>
              </div>
            </div>
          )}

          <div className="horizontal-line my-8"></div>

          <button
            onClick={() => {
              setShowExtraNo(true);
              setShowExtraYes(false);
              setClickedNo(true); // Update state
              setClickedYes(false); // Update state
            }}
            className={`question-button ${clickedNo ? 'clicked' : ''}`} // Corrected the backticks
          >
            No
          </button>

          {showExtraNo && (
            <div className="expanded-text text-lg">
              <p>
                Correctly using condoms and other barriers every time you have
                sex can reduce the risk of STIs, including HIV.
              </p>
              <br className="smaller-break" />
              <p>
                There are other ways to reduce, or even avoid, STI risk. Choose
                the prevention steps that work for you, including medication to
                prevent or treat HIV infection.
              </p>
              <br className="smaller-break" />
              <p>Know your CONDOM DOs & DON’Ts.</p>
              <p>
                The Right Way to Use an External (Sometimes Called Male) Condom
              </p>
              <br className="smaller-break" />
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 2 of 6 &gt;
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
