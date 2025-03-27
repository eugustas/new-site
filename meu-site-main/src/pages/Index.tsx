
import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SourceCodeSection from '@/components/home/SourceCodeSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContributionSection from '@/components/home/ContributionSection';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Header height offset
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header onScrollToSection={scrollToSection} />
      
      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <SourceCodeSection />
          <ServicesSection />
          <ContributionSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
