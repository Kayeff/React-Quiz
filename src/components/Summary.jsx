import completed from "../assets/quiz-complete.png";
import { questions } from "../questions.js";
import Button from "./Button.jsx";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react";

export default function Summary({ userAns, handleReset }) {
  const skippedQuestions = userAns.filter((answer) => answer === null).length;
  const correctQuestions = userAns.filter(
    (answer, index) => answer === questions[index].answers[0]
  ).length;
  const totalQuestions = 7;

  return (
    <div className="w-full bg-blackk rounded-3xl flex items-center justify-center flex-col p-10 space-y-6 shadow-quiz">
      <img className="h-32" src={completed} alt="" />
      <h1 className="font-semibold text-2xl">Quiz completed</h1>
      <h1 className="text-xl">
        Percentage: {((correctQuestions / totalQuestions) * 100).toFixed(0)}%
      </h1>
      <div className="w-full grid grid-cols-3 gap-2">
        <p className="p-4 flex items-center justify-center flex-col bg-chinese-violet rounded-xl">
          <span className="font-medium text-lg">{skippedQuestions}</span>
          <span className="">questions skipped</span>
        </p>
        <p className="p-4 flex items-center justify-center flex-col bg-chinese-violet rounded-xl">
          <span className="font-medium text-lg">{correctQuestions}</span>
          <span className="">answered correctly</span>
        </p>
        <p className="p-4 flex items-center justify-center flex-col bg-chinese-violet rounded-xl">
          <span className="font-medium text-lg">
            {totalQuestions - correctQuestions - skippedQuestions}
          </span>
          <span className="">answered incorrectly</span>
        </p>
      </div>
      <ol className="w-full grid grid-cols-1 gap-2">
        {userAns.map((answer, index) => {
          const correctAns = questions[index].answers[0];
          const isCorrect = correctAns === answer;

          return (
            <li
              key={answer}
              className="w-full p-2 flex items-center justify-between border-b border-chinese-violet"
            >
              <div>
                <h3 className="flex items-start justify-start space-x-1">
                  <p>{index + 1}. </p>
                  <p className="font-medium text-lg">{questions[index].text}</p>
                </h3>
                <div className="flex flex-col">
                  {answer ? (
                    <>
                      <p className="text-pretty">
                        <span className="text-charcoal/80">Your Answer. </span>
                        <span>{answer}</span>
                      </p>
                      <p className="text-pretty">
                        <span className="text-charcoal/80">
                          Correct Answer.{" "}
                        </span>
                        {correctAns}
                      </p>
                    </>
                  ) : (
                    <p className="text-charcoal/60">-</p>
                  )}
                </div>
              </div>
              <div>
                {isCorrect ? (
                  <RiCheckboxCircleFill className="text-green-700" />
                ) : (
                  <RiCloseCircleFill className="text-red-700" />
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="w-full flex items-center justify-center">
        <Button text="Want to restart?" onClick={handleReset} />
      </div>
    </div>
  );
}
