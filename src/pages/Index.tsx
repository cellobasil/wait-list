
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import BetaTestimonials from '../components/BetaTestimonials';
import Trust from '../components/Trust';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <BetaTestimonials />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
