import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetail from "@/components/services/ServiceDetail";
import Footer from "@/components/Footer";

// Service data
const services = {
  "engine-diagnostics": {
    title: "Engine Diagnostics",
    subtitle: "Advanced Computer Diagnostics",
    description:
      "Complete engine diagnostic services using state-of-the-art computer systems to identify and resolve engine issues quickly and accurately.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $89",
    duration: "30-60 minutes",
    features: [
      "Computer diagnostics using latest OBD-II scanners",
      "Error code reading and interpretation",
      "Engine performance testing",
      "Comprehensive diagnostic report",
      "Repair recommendations with cost estimates",
      "Follow-up testing after repairs",
    ],
    process: [
      "Initial consultation and symptom assessment",
      "Computer diagnostic scan",
      "Error code analysis and interpretation",
      "Physical inspection of related components",
      "Performance testing and verification",
      "Detailed report with recommendations",
    ],
  },
  "oil-change": {
    title: "Oil Change & Filter",
    subtitle: "Keep Your Engine Running Smooth",
    description:
      "Regular oil changes and filter replacements using premium oils to keep your engine running smoothly and extend its lifespan.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $39",
    duration: "15-30 minutes",
    features: [
      "Premium conventional, synthetic blend, or full synthetic oil",
      "High-quality oil filter replacement",
      "Fluid level check and top-off",
      "Multi-point inspection included",
      "Disposal of old oil and filter",
      "Service reminder sticker",
    ],
    process: [
      "Vehicle inspection and oil type selection",
      "Drain old oil completely",
      "Replace oil filter with premium filter",
      "Install new oil and check levels",
      "Multi-point inspection",
      "Reset service indicators",
    ],
  },
  "brake-services": {
    title: "Brake Services",
    subtitle: "Your Safety is Our Priority",
    description:
      "Complete brake system inspection, repair, and replacement services to ensure your safety and peace of mind on the road.",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $149",
    duration: "1-3 hours",
    features: [
      "Brake pad and shoe replacement",
      "Rotor resurfacing or replacement",
      "Brake fluid service and replacement",
      "Brake line inspection and repair",
      "Caliper service and replacement",
      "Complete safety inspection",
    ],
    process: [
      "Comprehensive brake system inspection",
      "Measure pad thickness and rotor condition",
      "Test brake fluid and lines",
      "Replace worn components",
      "Road test for proper operation",
      "Final safety check and documentation",
    ],
  },
  transmission: {
    title: "Transmission Repair",
    subtitle: "Expert Transmission Services",
    description:
      "Expert transmission diagnostics, repair, and maintenance to ensure smooth shifting and optimal performance.",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf7c0d8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $199",
    duration: "2-4 hours",
    features: [
      "Transmission diagnostics",
      "Fluid service and replacement",
      "Repair and rebuild services",
      "Performance optimization",
      "Road testing",
      "Warranty coverage",
    ],
    process: [
      "Initial diagnostic assessment",
      "Computer scan and fluid analysis",
      "Internal inspection if needed",
      "Repair or rebuild as required",
      "Road test and performance verification",
      "Final quality check",
    ],
  },
  "air-conditioning": {
    title: "Air Conditioning",
    subtitle: "Stay Cool and Comfortable",
    description:
      "AC system repair and maintenance to keep you comfortable in all weather conditions.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $79",
    duration: "1-2 hours",
    features: [
      "AC system diagnostics",
      "Refrigerant service and recharge",
      "Component replacement",
      "Performance testing",
      "Leak detection and repair",
      "Filter replacement",
    ],
    process: [
      "System performance evaluation",
      "Pressure and temperature testing",
      "Leak detection inspection",
      "Component repair or replacement",
      "Refrigerant service",
      "Final performance verification",
    ],
  },
  "belts-hoses": {
    title: "Belts & Hoses",
    subtitle: "Prevent Breakdowns",
    description:
      "Inspection and replacement of belts and hoses to prevent breakdowns and maintain optimal performance.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $59",
    duration: "30-90 minutes",
    features: [
      "Visual inspection of all belts and hoses",
      "Replacement with quality parts",
      "Preventive maintenance recommendations",
      "Tension adjustment",
      "Coolant system check",
      "Performance verification",
    ],
    process: [
      "Comprehensive visual inspection",
      "Check for wear, cracks, and leaks",
      "Test belt tension and alignment",
      "Replace worn components",
      "Adjust tension to specifications",
      "System performance check",
    ],
  },
  battery: {
    title: "Battery Service",
    subtitle: "Reliable Starting Power",
    description:
      "Battery testing, replacement, and electrical system diagnostics to keep your vehicle starting reliably.",
    image:
      "https://images.unsplash.com/photo-1609592806787-3d0b4c7b0e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $129",
    duration: "30-60 minutes",
    features: [
      "Battery testing and diagnostics",
      "Replacement with quality batteries",
      "Charging system inspection",
      "Electrical system diagnostics",
      "Terminal cleaning and protection",
      "Performance verification",
    ],
    process: [
      "Battery performance testing",
      "Charging system evaluation",
      "Electrical system inspection",
      "Battery replacement if needed",
      "Terminal service and protection",
      "Final system verification",
    ],
  },
  tires: {
    title: "Tire Services",
    subtitle: "Safe and Smooth Driving",
    description:
      "Complete tire services including installation, rotation, balancing, and alignment for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $25",
    duration: "30-120 minutes",
    features: [
      "Tire installation and mounting",
      "Rotation and balancing service",
      "Wheel alignment service",
      "Pressure monitoring system service",
      "Tire inspection and assessment",
      "Road hazard protection",
    ],
    process: [
      "Tire condition assessment",
      "Removal and installation",
      "Balancing and alignment",
      "Pressure adjustment",
      "Road test verification",
      "Final inspection and documentation",
    ],
  },
  suspension: {
    title: "Suspension Repair",
    subtitle: "Smooth and Safe Ride",
    description:
      "Suspension system inspection and repair to ensure a smooth, safe, and comfortable ride.",
    image:
      "https://images.unsplash.com/photo-1609592806787-3d0b4c7b0e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    price: "Starting at $179",
    duration: "2-4 hours",
    features: [
      "Shock and strut service",
      "Spring replacement and repair",
      "Alignment check and adjustment",
      "Ride quality testing",
      "Component inspection",
      "Performance optimization",
    ],
    process: [
      "Comprehensive suspension inspection",
      "Component testing and evaluation",
      "Replacement of worn parts",
      "Alignment and adjustment",
      "Road test and verification",
      "Final quality check",
    ],
  },
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  console.log("Service slug:", slug);
  console.log("Available services:", Object.keys(services));

  const service = services[slug as keyof typeof services];
  console.log("Found service:", service);

  if (!service) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            The service "{slug}" was not found.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Available services: {Object.keys(services).join(", ")}
          </p>
          <a
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-lg"
          >
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <PageBanner title={service.title} breadcrumbs={breadcrumbs} />
      <ServiceDetail service={service} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}
