
import React, { useState, useEffect } from 'react';

const ChatSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const chatSteps = [
    {
      type: 'incoming',
      message: 'Hi! I need info about your BMW X5 2023',
      delay: 1000
    },
    {
      type: 'bot',
      message: 'Great! The BMW X5 2023 is available for $65,000. Are you looking to buy or just getting info?',
      delay: 2000
    },
    {
      type: 'incoming', 
      message: 'Definitely interested in buying. Can we schedule a test drive?',
      delay: 1500
    },
    {
      type: 'bot',
      message: '✅ Perfect! I\'ve marked you as a hot lead and notified our sales team. They\'ll contact you within 15 minutes!',
      delay: 2000
    }
  ];

  useEffect(() => {
    if (!isAnimating) return;
    
    const timer = setTimeout(() => {
      setCurrentStep((prev) => {
        if (prev >= chatSteps.length - 1) {
          // Reset animation after completion
          setTimeout(() => {
            setCurrentStep(0);
          }, 3000);
          return prev;
        }
        return prev + 1;
      });
    }, chatSteps[currentStep]?.delay || 2000);

    return () => clearTimeout(timer);
  }, [currentStep, isAnimating, chatSteps]);

  return (
    <div className="relative">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 max-w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AI</span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">WhatsApp Business</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Online
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-3 h-64 overflow-hidden">
          {chatSteps.slice(0, currentStep + 1).map((step, index) => (
            <div
              key={index}
              className={`flex ${step.type === 'incoming' ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  step.type === 'incoming'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-emerald-500 text-white'
                }`}
              >
                {step.message}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {currentStep < chatSteps.length - 1 && (
            <div className="flex justify-end">
              <div className="bg-emerald-500 text-white p-3 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom indicator */}
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <span className="text-xs text-emerald-600 font-semibold">
            ⚡ Qualified lead in under 10 seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulator;
