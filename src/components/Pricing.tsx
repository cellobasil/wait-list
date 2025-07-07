
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">One missed deal costs more than a month of Qualifier</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Plan */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border-2 border-emerald-200 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Plan</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-gray-900">$39</span>
                <span className="text-gray-600">/ month per number</span>
              </div>
              <p className="text-gray-600">Everything you need to capture and qualify WhatsApp leads</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Core Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>1 WhatsApp Business number</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>5,000 messages per month</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>AI intent detection (Buy/Sell/FAQ)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>Auto-reply & tagging</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">CRM & Analytics</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>3 CRM integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>Unlimited team users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>Real-time dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-500" />
                    <span>GDPR/LGPD compliant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl mb-4">
                Start 7-Day Free Trial
              </button>
              <p className="text-sm text-gray-600">No credit card required • Cancel anytime</p>
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">Add-ons</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-1">Extra WhatsApp Number</h5>
                <p className="text-emerald-600 font-semibold">$15/month</p>
                <p className="text-sm text-gray-600">Includes 5,000 additional messages</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-1">Extra Message Pack</h5>
                <p className="text-emerald-600 font-semibold">$10/month</p>
                <p className="text-sm text-gray-600">10,000 additional messages</p>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="text-center mt-8 space-y-2 text-gray-600">
            <p>✓ 7-day free trial, no credit card lock-in</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ Cancel anytime, no questions asked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
