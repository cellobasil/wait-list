
import { ArrowRight, MessageCircleX, Copy, Clock } from 'lucide-react';

const PainSolution = () => {
  const painPoints = [
    {
      icon: MessageCircleX,
      title: "Missed Messages",
      description: "Lost leads while you sleep or handle other customers"
    },
    {
      icon: Copy,
      title: "Manual Copy-Paste",
      description: "Hours wasted transferring chat data to your CRM"
    },
    {
      icon: Clock,
      title: "Slow Response",
      description: "Competitors win while you're still typing replies"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">From Chaos to Conversion</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <div className="grid md:grid-cols-3 gap-6 lg:flex-1">
            {painPoints.map((pain, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <pain.icon size={24} className="text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{pain.title}</h3>
                <p className="text-sm text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <ArrowRight size={48} className="text-emerald-500 hidden lg:block" />
            <div className="lg:hidden w-full h-px bg-emerald-500 relative">
              <ArrowRight size={24} className="text-emerald-500 absolute right-0 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="lg:flex-1">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">1-Click Autopilot</h3>
              <p className="mb-6">AI detects intent, creates leads, sends perfect replies – all in under 60 seconds</p>
              <div className="flex items-center justify-center gap-2 text-emerald-100">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm">Working 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
