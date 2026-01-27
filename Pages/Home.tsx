import React from 'react';
import Header from '../Components/ui/home/Header';
import HeroCarousel from '../Components/ui/home/HeroCarousel';
import FeaturesSection from '../Components/ui/home/FeaturesSection';
import WhyChooseUs from '../Components/ui/home/WhyChooseUs';
import DashboardPreview from '../Components/ui/home/DashboardPreview';
import PricingSection from '../Components/ui/home/PricingSection';
import Footer from '../Components/ui/home/Footer';

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