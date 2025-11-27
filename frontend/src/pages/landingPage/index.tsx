import About from '@/components/landing/about';
import Challenge from '@/components/landing/challenge';
import CTA from '@/components/landing/cta';
import Demo from '@/components/landing/demo';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import Navbar from '@/components/landing/navbar';
import Pricing from '@/components/landing/pricing';
import Solution from '@/components/landing/solution';
import Testimonials from '@/components/landing/testimonials';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Features />
      <HowItWorks />
      <Demo />
      <Testimonials />
      <Pricing />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
