export default function Button({ onClick, text }) {
  return (
    <button
      className="px-6 py-3 font-medium cursor-pointer font-switzer hover:bg-charcoal bg-cambrige-blue hover:text-blackk rounded-full duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
