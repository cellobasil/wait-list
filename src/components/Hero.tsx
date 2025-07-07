
import React, { useState, useEffect } from 'react';
import WaitlistForm from './WaitlistForm';
import CountdownTimer from './CountdownTimer';
import ChatBubbleAnimation from './ChatBubbleAnimation';
import ChatSimulator from './ChatSimulator';

const Hero = () => {
  const [spotsLeft, setSpotsLeft] = useState(13);

  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 overflow-hidden">
      <ChatBubbleAnimation />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white text-sm font-medium">🚀 Early Access Program</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Automate Your<br />WhatsApp Leads<br />in 1 Click
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get 10+ qualified leads in the first 24 hours—or it's free.
              </p>
            </div>

            <CountdownTimer />
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="mb-4">
                <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Only {spotsLeft} spots left out of 50
                </div>
              </div>
              <WaitlistForm spotsLeft={spotsLeft} showSpotsLeft={false} />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-emerald-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">7-day money back</span>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Simulator */}
          <div className="flex justify-center lg:justify-end">
            <ChatSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
