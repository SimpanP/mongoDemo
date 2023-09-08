import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Fetch from "./hooks/useQuiz";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useQuiz } from "./hooks/useQuiz";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Report from "./pages/Report";
//Hook test, fetch and display quizes on frontpage

function App() {
  const { quiz, setQuiz, difficulty,setDifficulty } = useQuiz();
  return (
    <div>
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setDifficulty={setDifficulty} />} />
          <Route
            path="/quiz"
            element={<Quiz quiz={quiz} difficulty={difficulty} setQuiz={setQuiz} />}
          />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
