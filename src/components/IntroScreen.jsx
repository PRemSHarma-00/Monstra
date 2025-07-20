import { useEffect, useState } from "react";

const IntroScreen = ({ onContinue }) => {
  const fullText =
    "Welcome to the world of monsters.\nTrain, fight, and prove yourself as the ultimate champion.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setShowContinue(true);
    }
  }, [index]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-black text-white p-4">
      <div className="text-center max-w-4xl px-4">
        <pre className="whitespace-pre-wrap text-1xl md:text-2xl font-mono leading-relaxed">
          {displayedText}
        </pre>
        {showContinue && (
          <button
            onClick={onContinue}
            className="mt-10 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl text-xl transition duration-300"
          >
            ENTER
          </button>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;
