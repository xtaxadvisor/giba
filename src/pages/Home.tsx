import React from"react";
import { Hero } from '../components/home/Hero.js';
import { Services } from '../components/home/Services.js';
import { Features } from '../components/home/Features.js';
import { FeatureShowcase } from '../components/home/FeatureShowcase.js';
import { TrustIndicators } from '../components/home/TrustIndicators.js';
import { Testimonials } from '../components/home/Testimonials.js';
import { Subscriptions } from '../components/home/Subscriptions.js';
import { AboutUs } from '../components/home/AboutUs.js';
import { Contact } from '../components/home/Contact.js';
import { Header } from '../components/layout/Header.js';
import { AIAssistantWidget } from '../components/ai/AIAssistantWidget.js';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <FeatureShowcase />
        <Subscriptions />
        <TrustIndicators />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <AIAssistantWidget />
    </>
  );
}

// Export as both default and named export
export { Home };
export default Home;