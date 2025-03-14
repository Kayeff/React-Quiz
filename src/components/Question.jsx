import QuizTimer from "./QuizTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import { questions } from "../questions.js";

export default function Question({ index, onSelect, handleSkipAns }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAns(userAns) {
    setAnswer({
      selectedAnswer: userAns,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: userAns,
        isCorrect: questions[index].answers[0] === userAns,
      });

      setTimeout(() => {
        onSelect(userAns);
      }, 2000);
    }, 1000);
  }

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-6">
      <QuizTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleSkipAns : null}
      />
      <div className="flex items-center justify-center flex-col space-y-1">
        <h1 className="font-medium">Question {index + 1}</h1>
        <h1 className="font-medium text-2xl">{questions[index].text}</h1>
      </div>
      <Answers
        answers={questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAns={handleSelectAns}
      />
    </div>
  );
}
