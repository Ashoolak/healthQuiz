import React, { useState } from 'react';

export default function Question4(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [showExtraIDK, setShowExtraIDK] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);
  const [clickedIDK, setClickedIDK] = useState(false);

  return (
    <div
      id="question4"
      className={`question-background-4 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="w-full md:w-1/2 align-centre m-auto font-sans">
        <div className="content-container">
          <span className="font-bold block text-center">
            Answer <i>yes</i>, <i>no</i>, or <i>I don't know</i> to the
            following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Have you or any of your partners ever used illicit substances?
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
            <div className="expanded-text show-content text-lg">
              <p>
                Having sex while using drugs can make you more likely to engage
                in risky sexual behavior. Risky behavior can place you at risk
                for STIs, including HIV. Additionally, sharing needles,
                syringes, or other drug injection equipment can place you at
                risk for infections like HIV and viral hepatitis.
              </p>
              <br className="smaller-break" />
              <p>
                Correctly using condoms and other barriers every time you have
                sex can reduce the risk of infections.
              </p>
              <br className="smaller-break" />
              <p>Know your CONDOM DOs & DON’Ts.</p>
              <p>
                The Right Way to Use an External (Sometimes Called Male) Condom
              </p>
              <br className="smaller-break" />
              <p>
                You can also take steps to prevent getting HIV from injection
                drug use, including taking medication to prevent infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Continue to Question 5 of 6 &gt;
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
            <div className="expanded-text show-content text-lg">
              <p>
                Having sex while using drugs can make you more likely to engage
                in risky sexual behavior. Risky behavior can place you at risk
                for STIs, including HIV. Additionally, sharing needles,
                syringes, or other drug injection equipment can place you at
                risk for infections like HIV and viral hepatitis.
              </p>
              <br className="smaller-break" />
              <p>
                Correctly using condoms and other barriers every time you have
                sex can reduce the risk of infections.
              </p>
              <br className="smaller-break" />
              <p>Know your CONDOM DOs & DON’Ts.</p>
              <p>
                The Right Way to Use an External (Sometimes Called Male) Condom
              </p>
              <br className="smaller-break" />
              <p>
                You can also take steps to prevent getting HIV from injection
                drug use, including taking medication to prevent infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Continue to Question 5 of 6 &gt;
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
            <div className="expanded-text show-content text-lg">
              <p>
                Having sex while using drugs can make you more likely to engage
                in risky sexual behavior. Risky behavior can place you at risk
                for STIs, including HIV. Additionally, sharing needles,
                syringes, or other drug injection equipment can place you at
                risk for infections like HIV and viral hepatitis.
              </p>
              <br className="smaller-break" />
              <p>
                Correctly using condoms and other barriers every time you have
                sex can reduce the risk of infections.
              </p>
              <br className="smaller-break" />
              <p>Know your CONDOM DOs & DON’Ts.</p>
              <p>
                The Right Way to Use an External (Sometimes Called Male) Condom
              </p>
              <br className="smaller-break" />
              <p>
                You can also take steps to prevent getting HIV from injection
                drug use, including taking medication to prevent infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Continue to Question 5 of 6 &gt;
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
