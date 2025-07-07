
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface WaitlistFormProps {
  spotsLeft: number;
  showSpotsLeft?: boolean;
}

const WaitlistForm = ({ spotsLeft, showSpotsLeft = true }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Waitlist signup:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', whatsappNumber: '' });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 text-base bg-white/90 backdrop-blur-sm border-white/20 focus:bg-white"
          />
          <p className="text-xs text-emerald-100 mt-1 ml-1">We'll only message you once</p>
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12 text-base bg-white/90 backdrop-blur-sm border-white/20 focus:bg-white"
          />
          <p className="text-xs text-emerald-100 mt-1 ml-1">For early access updates only</p>
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="WhatsApp Number"
            value={formData.whatsappNumber}
            onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            required
            className="h-12 text-base bg-white/90 backdrop-blur-sm border-white/20 focus:bg-white"
          />
          <p className="text-xs text-emerald-100 mt-1 ml-1">To set up your demo account</p>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 text-lg bg-white text-emerald-600 hover:bg-gray-50 transform transition-all duration-200 hover:scale-105 font-semibold shadow-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
              Joining...
            </div>
          ) : (
            '🚀 Join Now - It\'s Free'
          )}
        </Button>
      </form>
      
      {showSpotsLeft && (
        <div className="text-center mt-4">
          <p className="text-emerald-100 font-semibold">
            Only <span className="text-yellow-300">{spotsLeft}</span> spots left out of 50
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
