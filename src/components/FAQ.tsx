
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most customers are live within 24 hours. Our setup wizard guides you through connecting WhatsApp Business, choosing your CRM, and training the AI on your business. The actual work takes about 15 minutes - we handle the technical setup automatically."
    },
    {
      question: "Which CRMs do you integrate with?",
      answer: "We have native integrations with Bitrix24, HubSpot, and Zoho CRM. These work out-of-the-box with zero coding. We're adding Salesforce and Pipedrive based on customer demand. Custom integrations available for enterprise customers."
    },
    {
      question: "How accurate is the AI intent detection?",
      answer: "Our GPT-4o powered system achieves 94% accuracy in classifying Buy, Sell, and FAQ intents. It learns from your specific business context and improves over time. You can always review and adjust classifications in the dashboard."
    },
    {
      question: "What happens to my existing WhatsApp chats?",
      answer: "Nothing changes for your customers. LeadQualifier works behind the scenes, analyzing incoming messages and creating CRM records. Your team continues using WhatsApp Business as normal, but now with AI-powered lead qualification and auto-replies."
    },
    {
      question: "Is my data secure and compliant?",
      answer: "Yes. We're GDPR and LGPD compliant with end-to-end encryption. Customer data is processed only for lead qualification and stored securely in EU/US data centers. We never share or sell your data. Full DPA available upon request."
    },
    {
      question: "What if Meta launches the same feature?",
      answer: "We're already 2 steps ahead. While Meta focuses on basic automation, we're building predictive lead-value AI that scores prospects before they even buy. Our roadmap includes deal probability, customer lifetime value prediction, and cross-platform lead intelligence."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about LeadQualifier</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
