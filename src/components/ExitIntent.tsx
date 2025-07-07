
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitIntent = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let mouseLeaveTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        clearTimeout(mouseLeaveTimer);
        mouseLeaveTimer = setTimeout(() => {
          setShowModal(true);
          setHasShown(true);
        }, 500);
      }
    };

    const handleInactivity = () => {
      if (!hasShown) {
        setShowModal(true);
        setHasShown(true);
      }
    };

    // Show after 45 seconds of inactivity
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(handleInactivity, 45000);
    };

    // Track mouse movement for inactivity
    const handleActivity = () => {
      resetTimer();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keypress', handleActivity);
    document.addEventListener('scroll', handleActivity);

    resetTimer();

    return () => {
      clearTimeout(timer);
      clearTimeout(mouseLeaveTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keypress', handleActivity);
      document.removeEventListener('scroll', handleActivity);
    };
  }, [hasShown]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-scale-in">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Wait! Don't Miss Out
          </h3>
          <p className="text-gray-600 mb-6">
            Get an extended <strong>14-day trial</strong> instead of 7 days. 
            Perfect for testing during your busy season.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-emerald-600 font-mono text-lg">QUALIFY14</span>
              <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded">CODE</span>
            </div>
            <p className="text-sm text-emerald-700">Use this code for 14-day extended trial</p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full mb-3"
          >
            Start 14-Day Trial
          </button>
          
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 text-sm hover:text-gray-700"
          >
            No thanks, continue browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntent;
