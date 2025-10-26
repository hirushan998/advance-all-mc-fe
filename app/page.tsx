import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import VehiclesServiced from "../components/VehiclesServiced";
import ServicesCarousel from "../components/ServicesCarousel";
import InspectionProcess from "../components/InspectionProcess";
import GoogleReviews from "../components/GoogleReviews";
import Testimonials from "../components/Testimonials";
import TrustedBrands from "../components/TrustedBrands";
import GalleryCarousel from "../components/GalleryCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <InspectionProcess />
      <ServicesCarousel />
      <VehiclesServiced />
      <GoogleReviews />
      <TrustedBrands />
      <GalleryCarousel />
      <Footer />
    </div>
  );
}
