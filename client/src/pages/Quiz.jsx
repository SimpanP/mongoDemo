import React, { useEffect, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";

//Hook test, fetch and display quizes on frontpage

export default function Quiz({quiz,difficulty,setQuiz}) {

 

  const inputColor = (obj) => {

    if(quiz.userSubmitted) {

      return obj.isAnswerCorrect ? "green" : "red";
    }
    else {
      return;
    }
  }

  const checkAnswers = () => {
    let nbrCorrectAnswers = 0;
    let submittedQuiz = [...quiz.questions].map((question) => {
      let answer = document.getElementById(`answer_${question._id}`).value;
      question.userResponse = answer;
      question.isAnswerCorrect = question.userResponse?.toLowerCase() === question.answer.toLowerCase() ;
      if (question.isAnswerCorrect) {
        nbrCorrectAnswers++;
      }
      return question;
    });
    setQuiz({
      userSubmitted: true,
      nbrCorrectAnswers: nbrCorrectAnswers,
      questions: submittedQuiz,
    });
  };

  return (
    <div>
      <h1>{"Current difficulty is: " + difficulty}</h1>


      <div>
        <ul>
          {quiz?.questions?.map((obj) => {
            return (
              <li>
                <span>{obj.question}</span>
                <input style={{backgroundColor:inputColor(obj)}} name={`answer_${obj._id}`} id={`answer_${obj._id}`} type="text" />
              </li>
            );
          })}
          <li>
            {" "}
            <button style={{ margin: 10 }} onClick={() => checkAnswers()}>
              Submit answer
            </button>
          </li>
        </ul>
        {quiz.userSubmitted && (
          <span>
            Correct answers: {quiz.nbrCorrectAnswers}/{quiz.questions.length}
          </span>
        )}
      </div>
    </div>
  );
}