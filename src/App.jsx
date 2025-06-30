import React from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/fotter";
import HeroSection from "./components/sections/hero-section";
import FeatureSection from "./components/sections/feature-section";
import TestimonialsSection from "./components/sections/testimonials-section";
import PricingSection from "./components/sections/pricing-section";
import ContactSection from "./components/sections/contact-section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
