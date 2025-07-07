
import React, { useState } from 'react';
import { MessageCircle, Tag, Shield } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Auto-Reply",
      description: "Never miss a lead again. Our AI responds to every WhatsApp message instantly, even while you sleep.",
      metric: "Responds in <5 sec",
      tooltip: "Average response time measured across 10,000+ messages"
    },
    {
      icon: Tag,
      title: "Intent Tagging & CRM Push",
      description: "Automatically detect buying intent and push qualified leads directly to your CRM with smart tags.",
      metric: "98% accuracy",
      tooltip: "Intent classification accuracy based on beta user data"
    },
    {
      icon: Shield,
      title: "Zero Manual Triage",
      description: "Stop wasting time sorting messages. Our AI handles everything from qualification to categorization.",
      metric: "Save 4+ hours/day",
      tooltip: "Average time saved per user based on beta feedback"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Early Access Members Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Be among the first to experience the future of WhatsApp lead automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon size={32} className="text-emerald-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Metric badge */}
              <div className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                {feature.metric}
              </div>

              {/* Tooltip */}
              {hoveredFeature === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white p-3 rounded-lg text-sm max-w-xs z-10 animate-fade-in">
                  {feature.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
