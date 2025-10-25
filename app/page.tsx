import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import VehiclesServiced from "../components/VehiclesServiced";
import ServicesCarousel from "../components/ServicesCarousel";
import InspectionProcess from "../components/InspectionProcess";
import TestimonialBrands from "../components/TestimonialBrands";
import GalleryCarousel from "../components/GalleryCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <VehiclesServiced />
      <ServicesCarousel />
      <InspectionProcess />
      <TestimonialBrands />
      <GalleryCarousel />
      <Footer />
    </div>
  );
}
