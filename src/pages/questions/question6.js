import React, { useState } from 'react';

export default function Question6(props) {
  const [showExtraYes, setShowExtraYes] = useState(false);
  const [showExtraNo, setShowExtraNo] = useState(false);
  const [showExtraIDK, setShowExtraIDK] = useState(false);
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);
  const [clickedIDK, setClickedIDK] = useState(false);

  return (
    <div
      id="question6"
      className={`question-background-6 flex text-white text-2xl h-screen justify-center items-center`}
    >
      <div className="w-full md:w-1/2 align-centre m-auto font-sans">
        <div className="content-container">
          <span className="font-bold block text-center">
            Answer <i>yes</i>, <i>no</i>, or <i>I don't know</i> to the
            following question.
          </span>
          <div className="mt-8 mb-8 text-center">
            {' '}
            Is it possible that any of your sex partners in the past 12 months
            had sex with someone else while they were still in a sexual
            relationship with you?
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
                Being in a long-term mutually monogamous relationship with a
                partner who does not have an STI is one of the most reliable
                ways to avoid infection. (Mutual monogamy means that you agree
                to be sexually active with only one person, who has agreed to be
                sexually active only with you.)
              </p>
              <br className="smaller-break" />
              <p>
                Whether you’re mutually monogamous or not, it’s important that
                you talk to your partner about STIs. It’s possible they have an
                infection but don’t know it – they may need testing or
                treatment. It’s also possible they can pass the infection to
                you.
              </p>
              <br className="smaller-break" />
              <p>
                In addition to mutual monogamy, there are other ways to reduce,
                or even avoid, STI risk. Choose the prevention steps that work
                for you, including condoms and medication to prevent or treat
                HIV infection.
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Complete Quiz
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
              <p>
                Agreeing to be in a long-term mutually monogamous relationship
                with a partner who does not have an STI is a great way to avoid
                infection. (Mutual monogamy means that you agree to be sexually
                active with only one person, who has agreed to be sexually
                active only with you.) Continue having open conversations with
                your partner about STI risk and sharing your STI test results
                with them. You can also consider other STI prevention methods
                that might work for you!
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Complete Quiz
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
              <p>
                If you’re not sure if your partner has had sex with others while
                also having sex with you, this could be a good time to have that
                conversation. It’s possible they have an infection but don’t
                know it – they may need testing or treatment. It’s also possible
                they can pass the infection to you.
              </p>
              <br className="smaller-break" />
              <p>
                Moving forward, being in a long-term mutually monogamous
                relationship with a partner who does not have an STI is one of
                the most reliable ways to avoid infection. (Mutual monogamy
                means that you agree to be sexually active with only one person,
                who has agreed to be sexually active only with you.) That’s
                something you can consider together. You can also consider other
                STI prevention methods that might work for you!
              </p>
              <div className="flex justify-center">
                <button onClick={props.onClick} className="primary-button">
                  Complete Quiz
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
