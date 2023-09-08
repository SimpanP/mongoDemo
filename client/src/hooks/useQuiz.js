import React, { useState, useEffect } from "react";

export const useQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [difficulty, setDifficulty] = useState(1);
  const fetchData = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_SERVER}/GetQuizesByDifficulty/${difficulty}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let json = await resp.json();
      setQuiz({ nbrCorrectAnswers: 0, userSubmitted: false, questions: json });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [difficulty]);

  return {
    quiz,
    setQuiz,
    difficulty,
    setDifficulty
  };
};
