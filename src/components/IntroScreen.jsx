import { useEffect, useState } from "react";

const IntroScreen = ({ onContinue }) => {
  const fullText =
    "Welcome to the world of monsters.\nTrain, fight, and prove yourself as the ultimate champion.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 28);
      return () => clearTimeout(timeout);
    } else {
      setTyping(false);
      setShowContinue(true);
    }
  }, [index]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[#080c14] text-white overflow-hidden">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500 opacity-60" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-60" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-60" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500 opacity-60" />

      <div className="relative z-20 text-center max-w-2xl px-6">
        {/* Logo — only place font-pixel is used */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="font-pixel text-blue-400 text-xs tracking-widest mb-2 opacity-60">
            MONSTRA
          </h1>
          <div className="h-px bg-blue-500 opacity-30 mb-2" />
          <h2 className="font-pixel text-white text-2xl md:text-3xl tracking-wider leading-relaxed">
            BATTLE
            <span className="text-blue-400"> ARENA</span>
          </h2>
          <div className="h-px bg-blue-500 opacity-30 mt-2" />
        </div>

        {/* Typewriter terminal box */}
        <div className="border border-blue-900 bg-[#0d1628] rounded-lg p-6 mb-8 min-h-[100px] text-left">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 text-xs tracking-widest uppercase font-bold">System</span>
          </div>
          <pre
            className={`whitespace-pre-wrap text-sm md:text-base font-sans leading-relaxed text-slate-200 ${
              typing ? 'cursor-blink' : ''
            }`}
          >
            {displayedText}
          </pre>
        </div>

        {/* Enter button */}
        {showContinue && (
          <div className="animate-fadeInUp">
            <button
              onClick={onContinue}
              className="mt-2 px-10 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-widest rounded transition-all duration-200"
            >
              ENTER
            </button>
            <p className="mt-4 text-slate-500 text-xs tracking-widest animate-pulse">
              PRESS ENTER
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;
