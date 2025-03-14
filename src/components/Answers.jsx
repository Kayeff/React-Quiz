import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleSelectAns,
}) {
  const shuffledAns = useRef();

  if (!shuffledAns.current) {
    shuffledAns.current = [...answers];
    shuffledAns.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="text-charcoal/85 space-y-1 w-full">
      {shuffledAns.current.map((ans, index) => {
        let cssClass = "";
        const isSelected = selectedAnswer === ans;

        if (isSelected && answerState === "answered") {
          cssClass = "bg-prussian-blue";
        }

        if (isSelected && answerState === "correct") {
          cssClass = "bg-green-700";
        }

        if (isSelected && answerState === "wrong") {
          cssClass = "bg-red-700";
        }

        return (
          <li key={index} className="flex items-center justify-center">
            <button
              className={twMerge(
                "w-full duration-300 cursor-pointer text-lg p-4 hover:bg-charcoal bg-cambrige-blue hover:text-blackk font-medium rounded-full",
                cssClass
              )}
              onClick={() => handleSelectAns(ans)}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
