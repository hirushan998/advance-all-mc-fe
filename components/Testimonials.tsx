"use client";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Sydney, NSW",
      rating: 5,
      text: "Outstanding mobile inspection service! The team diagnosed my potential car purchase issues quickly and provided a comprehensive report. They explained everything clearly and kept me informed throughout the process. Saved me from making a costly mistake!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Melbourne, VIC",
      rating: 5,
      text: "I've used their mobile inspection service for multiple vehicle purchases. Their expertise with different makes and models is impressive, and they always deliver quality reports on time. The convenience of mobile service is unbeatable!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Brisbane, QLD",
      rating: 5,
      text: "Professional, honest, and reliable mobile inspection service. They came to the seller's location and provided a detailed report that helped me negotiate a better price. The staff is friendly and knowledgeable about all vehicle types.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Perth, WA",
      rating: 5,
      text: "Excellent mobile pre-purchase inspection! The inspector was thorough and found several issues that weren't obvious. The detailed report with photos gave me confidence in my decision. Great value for money and peace of mind.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our mobile vehicle inspection services across Australia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary opacity-20">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="text-primary opacity-20 mb-6">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
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

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience our professional mobile vehicle inspection service?
          </p>
          <a
            href="/book-inspection"
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Book Your Inspection Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;