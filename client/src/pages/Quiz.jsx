import React, { useEffect, useState } from "react";
import "./Quiz.css"; // Import the CSS file

// ... Rest of your component code

//Hook test, fetch and display quizes on frontpage

export default function Quiz({ quiz, difficulty, setQuiz }) {
  const inputColor = (obj) => {
    if (quiz.userSubmitted) {
      return obj.isAnswerCorrect ? "green" : "red";
    } else {
      return;
    }
  };

  const checkAnswers = () => {
    let nbrCorrectAnswers = 0;
    let submittedQuiz = [...quiz.questions].map((question) => {
      let answer = document.getElementById(`answer_${question._id}`).value;
      question.userResponse = answer;
      question.isAnswerCorrect =
        question.userResponse?.toLowerCase() === question.answer.toLowerCase();
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
    <div className="quiz-container">
      <h1>{"Current difficulty is: " + difficulty}</h1>

      <div>
        <ul className="quiz-question-list">
          {quiz?.questions?.map((obj) => {
            return (
              <li key={obj._id} className="quiz-question-item">
                <span>{obj.question}</span>
                <input
                  className={`quiz-answer-input ${
                    quiz.userSubmitted
                      ? obj.isAnswerCorrect
                        ? "quiz-correct-answer"
                        : "quiz-incorrect-answers"
                      : ""
                  }`}
                  name={`answer_${obj._id}`}
                  id={`answer_${obj._id}`}
                  type="text"
                />
              </li>
            );
          })}
        </ul>
        <div className="center">
          <button className="quiz-submit-button" onClick={() => checkAnswers()}>
            Submit answer
          </button>
          {quiz.userSubmitted && (
            <span className="quiz-correct-answers">
              Correct answers: {quiz.nbrCorrectAnswers}/{quiz.questions.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
