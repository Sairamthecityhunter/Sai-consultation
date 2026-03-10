import React from 'react';
import Header from '../components/ui/home/Header';
import HeroCarousel from '../components/ui/home/HeroCarousel';
import FeaturesSection from '../components/ui/home/FeaturesSection';
import WhyChooseUs from '../components/ui/home/WhyChooseUs';
import DashboardPreview from '../components/ui/home/DashboardPreview';
import PricingSection from '../components/ui/home/PricingSection';
import Footer from '../components/ui/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <WhyChooseUs />
      <DashboardPreview />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}