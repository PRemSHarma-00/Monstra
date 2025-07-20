const LoadingScreen =()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white px-4">
        <p className="text-2xl mb-6">Loading.......</p>
        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 animate-loadingBar rounded-full" />
        </div>
        </div>

    );
};
export default LoadingScreen;