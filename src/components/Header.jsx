import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-col py-8 space-y-4">
      <img className="h-14 object-cover" src={quizLogo} alt="Quiz logo" />
      <h1 className="font-semibold text-3xl tracking-tight">
        Simple React Quiz
      </h1>
    </header>
  );
}
