import React, { useState } from 'react';
import './App.css';

import Quiz from './Components/Quiz';
import Article from './Components/Article';
import CreateArticle from './Components/CreateArticle';

import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';

const App = () => {
  const [start, setStart] = useState(false);
  const goHome = () => setStart(false);

  return (
    <BrowserRouter>
      <div className="app">

        {/* ✅ Navigation Bar */}
        <nav className="navbar">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/new" className="nav-item">New Article</NavLink>
          <NavLink to="/quiz" className="nav-item">Start Quiz</NavLink>
        </nav>

        {/* ✅ Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="landing">

                <div className="container00">
                  <h1>Welcome to the Finance Quiz!</h1>
                  <p>Test your knowledge on finance basics. Click below to begin.</p>
                  <button className="start-btn" onClick={() => setStart(true)}>
                    Start Quiz
                  </button>
                </div>

                <div className="container01">
                  <div>
                    <h1>Welcome to the Finance Quiz!</h1>
                    <p>Test your knowledge on finance basics. Click below to begin.</p>
                  </div>

                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg"
                      alt="Illustration"
                    />
                  </div>
                </div>

                <div className="container02">
                  <h1>Article Title</h1>
                  <h2>Subtitle</h2>
                  <p>Lorem ipsum dolor sit amet...</p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg"
                    alt="John Wick"
                  />
                  <p>More article content...</p>
                </div>
              </div>
            }
          />

          <Route path="/new" element={<CreateArticle />} />
          <Route path="/articles/:urlId" element={<Article />} />
          <Route path="/quiz" element={<Quiz goHome={goHome} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
