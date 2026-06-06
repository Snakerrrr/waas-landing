import { useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import UrgencyBanner from "./components/UrgencyBanner";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import HowItWorks from "./components/HowItWorks";
import Demos from "./components/Demos";
import Benefits from "./components/Benefits";
import BeforeAfter from "./components/BeforeAfter";
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
      <div className="min-h-screen bg-black text-surface-200">
        <CustomCursor />
        <Navbar onStartOnboarding={openOnboarding} />
        <UrgencyBanner onStartOnboarding={openOnboarding} />
        <main>
          <Hero onStartOnboarding={openOnboarding} />
          <Marquee />
          <HowItWorks />
          <Demos />
          <Benefits />
          <BeforeAfter />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTAFinal onStartOnboarding={openOnboarding} />
        </main>
        <Footer />
        <WhatsAppButton />

        {showOnboarding && <OnboardingForm onClose={() => setShowOnboarding(false)} />}
      </div>
    </SmoothScroll>
  );
}
