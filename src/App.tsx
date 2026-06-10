import { useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import HeroWave from "./components/HeroWave";
import Navbar from "./components/Navbar";
import UrgencyBanner from "./components/UrgencyBanner";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Demos from "./components/Demos";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import OnboardingForm from "./components/OnboardingForm";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const openOnboarding = () => setShowOnboarding(true);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-surface-200">
        <HeroWave />
        <div className="relative z-10">
          <Navbar onStartOnboarding={openOnboarding} />
          <UrgencyBanner onStartOnboarding={openOnboarding} />
          <main>
            <Hero onStartOnboarding={openOnboarding} />
            <HowItWorks />
            <Demos />
            <Benefits />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTAFinal onStartOnboarding={openOnboarding} />
          </main>
          <Footer />
          <WhatsAppButton />
          {showOnboarding && <OnboardingForm onClose={() => setShowOnboarding(false)} />}
        </div>
      </div>
    </SmoothScroll>
  );
}
