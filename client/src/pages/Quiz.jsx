import React, { useEffect, useState } from "react";
import "./Quiz.css"; // Import the CSS file

//Hook test, fetch and display quizes on frontpage

export default function Quiz({ quiz, difficulty, setQuiz }) {
  const inputColor = (obj) => {
    if (quiz.userSubmitted) {
      return obj.isAnswerCorrect ? "green" : "red";
    } else {
      return;
    }
  };
  const [userName, setUserName] = useState("");

  const checkAnswers = (name) => {
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

    let storage = sessionStorage.getItem(name);
    if(storage) {
      //abort or add "1" to name string,
    }

    sessionStorage.setItem(name, `${name}: ${nbrCorrectAnswers}/10`);

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
                  className={`quiz-answer-input ${quiz.userSubmitted
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
          <button className="quiz-submit-button" onClick={() => {
            //REMOVE
            //get a name string, this is auto generated but should be sent from input field.
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let name = "";
            for(let i = 0; i < 10; i++) {
              name += characters.charAt(Math.floor(Math.random() * characters.length))
            }
            //REMOVE ^

            checkAnswers(name);
          }}>
            Submit answer
          </button>
          <div>
            <p>Enter your username:</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
          {quiz.userSubmitted && (
            <span className="quiz-correct-answers">
              Correct answers: {userName || "Anonymous"} - {quiz.nbrCorrectAnswers}/{quiz.questions.length}
            </span>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
