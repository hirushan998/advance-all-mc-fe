'use client';

import { useState, useEffect } from 'react';

const TestimonialsAndBrands = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Professional, honest, and reliable. They saved me hundreds compared to the dealership quote and the work was done perfectly. The staff is friendly and knowledgeable.",
      name: "Jennifer Chen",
      location: "Tucson, AZ",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      rating: 5,
      text: "Excellent service and fair pricing. The team explained everything clearly and completed the inspection on time. I highly recommend Advanced All Mechanical for any automotive needs.",
      name: "Michael Rodriguez",
      location: "Tucson, AZ",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      rating: 5,
      text: "Outstanding customer service! They went above and beyond to ensure my vehicle was safe and running smoothly. The diagnostic report was thorough and easy to understand.",
      name: "Sarah Johnson",
      location: "Tucson, AZ",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const brands = [
    { name: 'Toyota', logo: '/api/placeholder/120/60' },
    { name: 'Honda', logo: '/api/placeholder/120/60' },
    { name: 'Ford', logo: '/api/placeholder/120/60' },
    { name: 'Chevrolet', logo: '/api/placeholder/120/60' },
    { name: 'BMW', logo: '/api/placeholder/120/60' },
    { name: 'Mercedes', logo: '/api/placeholder/120/60' },
    { name: 'Nissan', logo: '/api/placeholder/120/60' },
    { name: 'Volkswagen', logo: '/api/placeholder/120/60' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Testimonials Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>

            <div className="relative bg-gray-50 rounded-lg p-8 min-h-[300px]">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4 bg-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trusted Brands Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              TRUSTED BRANDS WE SERVICE
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are certified to work on all major automotive brands. Our 
              technicians have the expertise and tools to service your vehicle 
              regardless of make or model.
            </p>

            {/* Brand Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="text-center">
                    <div className="w-16 h-8 bg-gray-300 rounded mb-2 mx-auto flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndBrands;