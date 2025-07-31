import React, { useState } from 'react';
import Quiz from './Components/Quiz';
import './App.css';

const App = () => {
  const [start, setStart] = useState(false);

const goHome = () => setStart(false);


  return (
    <>
      {!start ? (
        <div className="landing">
          <h1>Welcome to the Finance Quiz!</h1>
          <p>Test your knowledge on finance basics. Click below to begin.</p>
          <button className="start-btn" onClick={() => setStart(true)}>
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz goHome={goHome} />
      )}
    </>
  );
};

export default App;