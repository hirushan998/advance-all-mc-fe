import ServicesBanner from '@/components/services/ServicesBanner';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <ServicesBanner />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
    </>
  );
}