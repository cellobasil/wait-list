import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Clock, ShoppingCart, CheckCircle, ArrowRight, X, User } from 'lucide-react';
import { supabase } from '@/lib/supabase'


const PhLandingAnimated = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '' });
  const [footerEmail, setFooterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [orderCounter, setOrderCounter] = useState(0);

  // Chat animation sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = () => {
        if (current < 37) {
          current += 1;
          setOrderCounter(current);
          setTimeout(increment, 50);
        }
      };
      increment();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
      .from('whitelist')
      .insert({ name: heroForm.name, email: heroForm.email })
    if (error) {
      console.error('Supabase insert error:', error)
      setIsSubmitting(false)
      return
   }
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } catch (error) {
      console.error('Hero form submission error:', error);
    }

    setIsSubmitting(false);
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('whitelist')
        .insert({ email: footerEmail })
      if (error) {
        console.error('Supabase insert error:', error)
        setIsSubmitting(false)
        return
      }
      setShowSuccess(true);
      setTimeout(() => {
        setStickyVisible(false);
        window.location.href = '/thank-you';
      }, 2000);
    } catch (error) {
      console.error('Footer form submission error:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Scarcity Badge */}
            <motion.div
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥 Only 50 beta seats • 13 left
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Stop Answering 200<br />
              WhatsApp Messages<br />
              a Day.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our AI turns every chat into a paid order—before you can finish your coffee.
            </motion.p>

            {/* Value Props with staggered animation */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "24/7 auto-reply",
                "Buy/FAQ intent tags",
                "Push to Shopify"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero Form */}
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <form onSubmit={handleHeroSubmit} className="space-y-4 relative">
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      className="absolute inset-0 bg-green-500/90 rounded-lg flex items-center justify-center z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <CheckCircle size={48} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                    required
                    className="h-14 text-lg bg-white/95 border-white/30 focus:bg-white"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    placeholder="Work Email"
                    value={heroForm.email}
                    onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                    required
                    className="h-14 text-lg bg-white/95 border-white/30 focus:bg-white"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 text-white font-bold"
                  >
                    {isSubmitting ? 'Processing...' : 'Get Early Access →'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Social Proof */}
            <motion.p
              className="text-red-200 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Loved by PH brands like <span className="font-semibold text-white">Tote&Go</span> and <span className="font-semibold text-white">GadgetLab</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pain Magnifier */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-8">
              The Hidden Cost of Slow WhatsApp Response
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: "42%", desc: "of PH shoppers drop off after 10 min wait" },
              { stat: "3h", desc: "Store owners spend daily copy-pasting order details" },
              { stat: "₱780", desc: "Average lost basket per missed chat" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-red-900/30 rounded-xl border border-red-700"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold text-red-400 mb-2">{item.stat}</div>
                <p className="text-red-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated Chat Screenshot */}
          <motion.div
            className="max-w-sm mx-auto bg-gray-800 rounded-2xl p-4 border border-red-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-green-600 text-white p-3 rounded-lg mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <span className="font-medium">Customer</span>
              </div>
              <p className="text-sm">Hi, is this dress available in size M? How much shipping to Cebu?</p>
              <div className="text-xs text-green-200 mt-1">12:45 PM</div>
            </div>
            <motion.div
              className="text-center py-4"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="flex items-center justify-center gap-2 text-red-400">
                <MessageCircle size={16} />
                <span className="text-sm font-medium">Customer left chat</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">15 minutes ago</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to never miss a sale again
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "Connect WhatsApp in 2 min", desc: "No coding required", step: "1" },
              { icon: Clock, title: "AI auto-replies & tags intent", desc: "In less than 5 seconds", step: "2" },
              { icon: ShoppingCart, title: "Orders push to Shopify/HubSpot", desc: "See only hot carts", step: "3" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon size={32} className="text-green-600" />
                </motion.div>
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Chat Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="font-semibold">WhatsApp Bot</span>
              <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            <div className="space-y-3">
              <AnimatePresence mode="wait">
                {chatStep === 0 && (
                  <motion.div
                    key="customer"
                    className="bg-gray-100 p-3 rounded-lg ml-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <p className="text-sm">Hi, do you have this in blue?</p>
                  </motion.div>
                )}

                {chatStep === 1 && (
                  <motion.div
                    key="typing"
                    className="bg-green-100 p-3 rounded-lg mr-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </motion.div>
                )}

                {chatStep === 2 && (
                  <motion.div
                    key="reply"
                    className="bg-green-100 p-3 rounded-lg mr-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                  >
                    <p className="text-sm">Yes! We have it in blue, size M. ₱1,299 + free shipping. Want me to reserve it?</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Mini-Case */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "We cut response time from 12 min to 12 sec and recovered ₱112k in abandoned carts within the first week."
          </motion.blockquote>

          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">MT</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Mark Tan</div>
              <div className="text-gray-600">Founder @ BlueTote.ph</div>
            </div>
          </motion.div>

          <motion.div
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            +{orderCounter}% qualified orders
          </motion.div>
        </div>
      </section>

      {/* Offer & Risk Reversal */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            7-day free run • No card required
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Keep every peso you earn.
          </motion.p>

          <motion.div
            className="bg-yellow-400 text-black p-6 rounded-xl font-bold text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            animate={{ x: [0, 2, -2, 0] }}
            whileInView={{ x: [0, 2, -2, 0] }}
          >
            No qualified order in 24h? We extend beta 7 days free.
          </motion.div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <AnimatePresence>
        {stickyVisible && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 shadow-2xl z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleFooterSubmit} className="flex flex-col sm:flex-row gap-4 items-center relative">
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      className="absolute inset-0 bg-green-500/90 rounded-lg flex items-center justify-center z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <CheckCircle size={48} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div className="flex-1" whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    placeholder="Your work email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    required
                    className="h-12 bg-white text-black border-0"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-12 px-8 whitespace-nowrap"
                  >
                    {isSubmitting ? 'Processing...' : 'Claim My Spot (13 left)'}
                  </Button>
                </motion.div>

                <motion.button
                  type="button"
                  onClick={() => setStickyVisible(false)}
                  className="text-red-200 hover:text-white ml-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </form>

              <div className="flex justify-center gap-4 mt-2 text-xs text-red-200">
                <span>GDPR</span>
                <span>•</span>
                <span>Made for PH stores</span>
                <span>•</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhLandingAnimated;