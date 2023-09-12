import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home({ setDifficulty }) {
  const navigate = useNavigate();

  const handleClick = () => {
    let level = document.getElementById("level").value;
    setDifficulty(level);
    navigate("quiz");
  };

  return (
    <div className="home-container">
      <select id="level" className="home-select">
        <option value={1}>Easy</option>
        <option value={2}>Medium</option>
        <option value={3}>Hard</option>
      </select>
      <button
        className="home-start-button"
        type="submit"
        onClick={() => handleClick()}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
