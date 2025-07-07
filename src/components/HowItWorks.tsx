
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect WhatsApp",
      description: "Link your WhatsApp Business account in under 2 minutes",
      benefit: "Zero coding required—works with any WhatsApp setup",
      icon: "🔗"
    },
    {
      number: "02", 
      title: "Bot Qualifies Messages",
      description: "AI analyzes every message for buying intent automatically",
      benefit: "Catches 98% of leads while you focus on closing deals",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Leads Flow to CRM",
      description: "Qualified prospects appear in your CRM with full context",
      benefit: "Never lose another hot lead—even at 3 AM",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to never miss a WhatsApp lead again
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-emerald-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-emerald-700 font-medium">
                    {step.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
