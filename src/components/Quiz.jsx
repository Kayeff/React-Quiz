import { useCallback, useState } from "react";
import { questions } from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const activeQuestionIndex = userAns.length;
  const isComplete = activeQuestionIndex === questions.length;

  const handleSelectAns = useCallback(function handleSelectAns(userAnswer) {
    setUserAns((prev) => [...prev, userAnswer]);
  }, []);

  function handleReset() {
    setUserAns([]);
  }

  const handleSkipAns = useCallback(() => {
    handleSelectAns(null);
  }, [handleSelectAns]);

  if (isComplete) {
    return <Summary userAns={userAns} handleReset={handleReset} />;
  }

  return (
    <div className="bg-blackk p-10 rounded-3xl flex items-center justify-center flex-col shadow-quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handleSelectAns}
        handleSkipAns={handleSkipAns}
      />
    </div>
  );
}
