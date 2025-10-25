"use client";

import { useState, useEffect } from "react";

const TestimonialBrands = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Tucson, AZ",
      rating: 5,
      text: "Outstanding service! The team at Advanced All Mechanical diagnosed my transmission issue quickly and fixed it at a fair price. They explained everything clearly and kept me informed throughout the process.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "I've been bringing my fleet vehicles here for years. Their expertise with different makes and models is impressive, and they always deliver quality work on time. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Tucson, AZ",
      rating: 5,
      text: "Professional, honest, and reliable. They saved me hundreds compared to the dealership quote and the work was done perfectly. The staff is friendly and knowledgeable.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const brands = [
    {
      name: "Toyota",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png",
    },
    {
      name: "Honda",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png",
    },
    {
      name: "Ford",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Ford-Logo.png",
    },
    {
      name: "Chevrolet",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/Chevrolet-Logo.png",
    },
    {
      name: "BMW",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    },
    {
      name: "Mercedes",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png",
    },
    {
      name: "Nissan",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo.png",
    },
    {
      name: "Volkswagen",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Volkswagen-Logo.png",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Testimonials */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                WHAT OUR CUSTOMERS SAY
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary opacity-20">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Brand Logos */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                TRUSTED BRANDS WE SERVICE
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                We are certified to work on all major automotive brands. Our
                technicians have the expertise and tools to service your vehicle
                regardless of make or model.
              </p>
            </div>

            {/* Brand Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-sm font-semibold text-gray-600">${brand.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBrands;
