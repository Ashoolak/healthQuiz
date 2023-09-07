import React, { useState } from 'react';

export default function Question3(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [showExtraIDK, setShowExtraIDK] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);
  const [clickedIDK, setClickedIDK] = useState(false);

  return (
    <div
      id="question3"
      className={`question-background-3 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="content-container">
        <div className="w-full md:w-1/2 align-centre m-auto font-sans">
          <span className="font-bold block text-center">
            Answer <i>yes</i>, <i>no</i>, or <i>I don't know</i> to the
            following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Have any of your partners had an STI?
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
                Knowing if your partner has an STI is good information to have
                when you’re making choices about your sexual health! If your
                partner is currently receiving treatment for an STI, you may
                need treatment, too, and you probably need to avoid sex until
                you’ve both completed your treatment. Once you’ve talked to your
                partner, talk to your healthcare provider. They’ll have the best
                advice for you based on your current situation. This can include
                offering you STI testing and treatment, including medication to
                prevent or treat HIV infection, if you need it. In the future,
                continue sharing STI test results with your partner!
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 4 of 6 &gt;
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
              Knowing if your partner has an STI is good information to have
              when you’re making choices about your sexual health. If possible,
              having a conversation about STIs is a good idea. Whatever you
              learn can inform how you choose to protect yourself. For example,
              if you learn that your partner is currently receiving treatment
              for an STI, you may need treatment, too, and you probably need to
              avoid sex until you’ve both completed your treatment. A
              conversation with your partner is a good first step. Then your
              healthcare provider can help you navigate next steps, which can
              include offering you STI testing and treatment, including
              medication to prevent or treat HIV infection, if you need it!
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 4 of 6 &gt;
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
              Just like it’s possible to not know if you’ve had an STI before,
              it’s also possible to not know if your partner has. That’s okay!
              Knowing if your partner has an STI is good information to have
              when you’re making choices about your sexual health. If possible,
              having a conversation about STIs is a good idea. Whatever you
              learn can inform how you choose to protect yourself. For example,
              if you learn that your partner is currently receiving treatment
              for an STI, you may need treatment, too, and you probably need to
              avoid sex until you’ve both completed your treatment. A
              conversation with your partner is a good first step. Then your
              healthcare provider can help you navigate next steps. This can
              include offering you STI testing and treatment, including
              medication to prevent or treat HIV infection, if you need it.
              <div className="flex justify-center">
                <button onClick={props.onClick} className="next-button">
                  Continue to Question 4 of 6 &gt;
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
