import React from 'react';
import LandingPage from './LandingPage/landingPage';
import Question1 from './Questions/question1';
import Question2 from './Questions/question2';
import Question3 from './Questions/question3';
import Question4 from './Questions/question4';
import Question5 from './Questions/question5';
import Question6 from './Questions/question6';
import CompletionPage from './CompletionPage/completionPage';

export default function Home() {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <LandingPage onClick={() => scrollToComponent('question1')} />
      <Question1
        onClick={() => scrollToComponent('question2')}
        id="question1"
      />
      <Question2
        onClick={() => scrollToComponent('question3')}
        id="question2"
      />
      <Question3
        onClick={() => scrollToComponent('question4')}
        id="question3"
      />
      <Question4
        onClick={() => scrollToComponent('question5')}
        id="question4"
      />
      <Question5
        onClick={() => scrollToComponent('question6')}
        id="question5"
      />
      <Question6
        onClick={() => scrollToComponent('completionPage')}
        id="question6"
      />

      <CompletionPage id="completionPage" />
    </>
  );
}
