
import React from 'react';

const ChatBubbleAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating chat bubbles */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="w-6 h-2 bg-emerald-300 rounded-full mb-1"></div>
          <div className="w-4 h-2 bg-emerald-200 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
          <div className="w-5 h-2 bg-green-300 rounded-full mb-1"></div>
          <div className="w-3 h-2 bg-green-200 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubbleAnimation;
