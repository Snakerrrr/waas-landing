import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosBar from "./components/LogosBar";
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

  return (
    <div className="min-h-screen bg-white text-surface-900 dark:bg-surface-950 dark:text-surface-100">
      <Navbar onStartOnboarding={() => setShowOnboarding(true)} />
      <main>
        <Hero onStartOnboarding={() => setShowOnboarding(true)} />
        <LogosBar />
        <HowItWorks />
        <Demos />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTAFinal onStartOnboarding={() => setShowOnboarding(true)} />
      </main>
      <Footer />
      <WhatsAppButton />

      {showOnboarding && <OnboardingForm onClose={() => setShowOnboarding(false)} />}
    </div>
  );
}
