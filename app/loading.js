export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-t-4 border-cyan-400 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-r-4 border-blue-500 rounded-full animate-spin reverse"></div>
                <div className="absolute inset-4 border-b-4 border-cyan-600 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}
