// Reusable Question Component
export default function Question(props) {
  const { questionText, options, backgroundClass, onClickNext } = props;
  const [showExtra, setShowExtra] = useState(null);
  const [clicked, setClicked] = useState(null);

  const handleClick = (option) => {
    setShowExtra(option);
    setClicked(option);
  };

  return (
    <div
      className={`flex text-white text-2xl h-screen justify-center items-center ${backgroundClass} ${
        clicked ? 'clicked-background' : ''
      }`}
    >
      <div className="w-full md:w-1/2 align-center m-auto font-sans">
        <span className="font-bold block text-center">{questionText}</span>
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <button
              onClick={() => handleClick(option.value)}
              className={`question-button ${
                clicked === option.value ? 'clicked' : ''
              }`}
            >
              {option.label}
            </button>
            {showExtra === option.value && (
              <div className="expanded-text text-base">
                {option.extraText}
                <button onClick={onClickNext}>Continue to Next Question</button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
