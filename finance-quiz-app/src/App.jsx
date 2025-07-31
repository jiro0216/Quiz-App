import React, { useState } from 'react';
import Quiz from './Components/Quiz';
import './App.css';

const App = () => {

  // State to manage quiz start
  const [start, setStart] = useState(false);
  const goHome = () => setStart(false);


  return (
    <>
      {!start ? (
        <div className="landing">

          <div className="container00">

            <h1>Welcome to the Finance Quiz!</h1>
            <p>Test your knowledge on finance basics. Click below to begin.</p>
            <button className="start-btn" onClick={() => setStart(true)}>
              Start Quiz
            </button>

          </div>

          <div className="container01 ">

            <div>
              <h1>Welcome to the Finance Quiz!</h1>
              <p>Test your knowledge on finance basics. Click below to begin.</p>
            </div>

            <div>
              <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg" />
            </div>

          </div>

          <div className="container02">

            <h1> Article Title</h1>
            <h2>Subtitle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg" alt="John Wick" />

           <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>



        </div>
      ) : (
        <Quiz goHome={goHome} />
      )}
    </>
  );
};

export default App;