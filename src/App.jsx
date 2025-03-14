import Header from "./components/Header";
import Quiz from "./components/Quiz";

export default function App() {
  return (
    <main className="w-full min-h-screen font-switzer bg-prussian-blue text-charcoal flex justify-center">
      <div className="w-[50%] space-y-10 py-10">
        <Header />
        <Quiz />
      </div>
    </main>
  );
}
