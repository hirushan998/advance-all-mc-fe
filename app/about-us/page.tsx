import AboutBanner from '@/components/about/AboutBanner';
import AboutSection from '@/components/about/AboutSection';
import VisionMission from '@/components/about/VisionMission';
import StatsCounter from '@/components/about/StatsCounter';
import TestimonialsAndBrands from '@/components/about/TestimonialsAndBrands';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <VisionMission />
      <StatsCounter />
      <TestimonialsAndBrands />
      <Footer />
    </>
  );
}