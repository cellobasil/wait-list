
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const BetaTestimonials = () => {
  const betaLogos = [
    { name: "AutoMax", logo: "AM" },
    { name: "DentaCare", logo: "DC" },
    { name: "PropVision", logo: "PV" },
    { name: "TravelPro", logo: "TP" },
    { name: "StyleHub", logo: "SH" },
    { name: "FitLife", logo: "FL" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "AutoMax",
      quote: "We caught 40% more qualified BMW leads in the first week. The AI knows exactly when someone's ready to buy.",
      numbers: "+40% qualified leads",
      avatar: "SC"
    },
    {
      name: "Dr. Lisa Kumar", 
      role: "Practice Owner",
      company: "DentaCare",
      quote: "Patient inquiries used to get buried in our WhatsApp. Now every consultation request lands in our CRM instantly.",
      numbers: "300+ leads captured",
      avatar: "LK"
    },
    {
      name: "Marco Silva",
      role: "CEO", 
      company: "PropVision",
      quote: "Weekend property inquiries were always missed. Not anymore—we've booked 12 viewings from after-hours messages.",
      numbers: "12 viewings booked",
      avatar: "MS"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            30+ SMBs Already Onboard
          </h2>
          <p className="text-gray-600 mb-8">
            Real results from businesses using our beta
          </p>

          {/* Beta Partner Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12 opacity-60">
            {betaLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="font-semibold text-gray-600 text-sm">{company.logo}</span>
                </div>
                <div className="text-xs text-gray-500">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  <div className="mb-4">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {testimonial.numbers}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BetaTestimonials;
