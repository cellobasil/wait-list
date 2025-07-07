
import React, { useState } from 'react';
import WaitlistForm from './WaitlistForm';

const FinalCTA = () => {
  const [spotsLeft] = useState(13);

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-500 to-green-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Don't Miss Your Spot
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join the exclusive group of businesses getting early access to AI-powered WhatsApp lead automation.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="mb-6">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔥 Limited Time: Only {spotsLeft} spots remaining
            </div>
          </div>
          
          <WaitlistForm spotsLeft={spotsLeft} showSpotsLeft={false} />
        </div>

        <div className="text-emerald-100 text-sm">
          <p>✓ No spam, ever • ✓ Exclusive early access • ✓ 7-day head start</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
