import React, { useState, useEffect } from "react";

export const useQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [difficulty, setDifficulty] = useState(1);

  //select 10 random objects from an array and return them
  const select10RandomQuestions = (numberOfQuestions, array) => {
    let returnArray = [];
    let usedNumbers = [];
    while (returnArray.length < numberOfQuestions) {
      let random = Math.floor(Math.random() * array.length);
      
      if (!usedNumbers.includes(random)) {
        returnArray.push(array[random]);
        usedNumbers.push(random);
      }

    }
    return returnArray;
  }

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
      let random = select10RandomQuestions(10, json);
      setQuiz({ nbrCorrectAnswers: 0, userSubmitted: false, questions: random });
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
