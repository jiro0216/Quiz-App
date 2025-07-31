import React from 'react';
import './Result.css';

const Result = ({ score, total, onReset, onHome, perfect }) => (
  <div className="result-container">
    <h2>You Scored {score} out of {total}</h2>

    {perfect && (

      < div className="perfect-score">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg" alt="Perfect Score" />
        <h3>Congratulations! You got a perfect score!</h3>
      </div>
      
    )}

    <div className="button-group">
      <button onClick={onReset}>
        {perfect ? 'Continue' : 'Try Again'}
      </button>
      <button onClick={onHome}>Home</button>
    </div>
  </div>
);

export default Result;
