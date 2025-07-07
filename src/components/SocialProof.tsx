
const SocialProof = () => {
  const logos = [
    "AutoMax", "DentaCare", "PropVision", "TravelPro", "StyleHub", "FitLife"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director, AutoMax",
      image: "/placeholder-avatar-1.jpg",
      quote: "We went from missing 40% of WhatsApp leads to capturing every single one. Our BMW sales increased 27% in just two months using LeadQualifier."
    },
    {
      name: "Marco Silva",
      role: "Owner, PropVision Real Estate",
      image: "/placeholder-avatar-2.jpg", 
      quote: "The AI instantly knows if someone's ready to buy or just browsing. We close deals faster because we focus on hot prospects first. Game changer for our team."
    }
  ];

  const metrics = [
    { value: "+27%", label: "Qualified Leads" },
    { value: "<15 min", label: "Median Response" },
    { value: "98.7%", label: "Uptime" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-8">Trusted by growing businesses across EMEA & LATAM</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="font-semibold text-gray-600">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">{metric.value}</span>
              </div>
              <p className="text-gray-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
