const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#080c14] text-white px-4">
      <div className="text-center">
        <p className="font-pixel text-blue-400 text-xs tracking-widest mb-2">MONSTRA</p>
        <p className="font-bold text-xl mb-8 tracking-wider text-white">Loading...</p>
        <div className="w-64 h-2 bg-[#0d1628] border border-blue-900 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-loadingBar rounded-full" />
        </div>
        <p className="text-slate-600 text-xs mt-6 animate-pulse tracking-widest">PLEASE WAIT</p>
      </div>
    </div>
  );
};

export default LoadingScreen;