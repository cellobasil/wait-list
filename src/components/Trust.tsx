
import React from 'react';
import { Shield, CheckCircle, Lock, Award } from 'lucide-react';

const Trust = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full data protection compliance"
    },
    {
      icon: CheckCircle, 
      title: "7-Day Money Back",
      description: "No questions asked guarantee"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption"
    },
    {
      icon: Award,
      title: "99.9% Uptime",
      description: "Reliable 24/7 service"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Trusted & Secure
          </h3>
          <p className="text-gray-600">
            Your data and leads are protected by enterprise-grade security
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                <badge.icon size={24} className="text-emerald-600" />
              </div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
