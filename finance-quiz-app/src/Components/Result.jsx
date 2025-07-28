import React from 'react';

const Result = ({ score, total, onReset, onHome, perfect }) => (
  <div className="result-container">
    <h2>You Scored {score} out of {total}</h2>
    <div className="button-group">
      {perfect ? (
        <button onClick={onReset}>Continue</button>
      ) : (
        <button onClick={onReset}>Try again</button>
      )}
      <button onClick={onHome}>Home</button>
    </div>
  </div>
  
);

export default Result;