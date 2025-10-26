"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/hero/car-inspection.jpg",
      title: "Drive Away with Confidence",
      subtitle:
        "Mobile pre-purchase inspections across Australia. Get peace of mind before you buy",
    },
    {
      id: 2,
      image: "/hero/car-inspection-2.jpg",
      title: "Expert Vehicle Inspections",
      subtitle:
        "We come to you for a full vehicle check — quick, clear, and reliable",
    },
    {
      id: 3,
      image: "/hero/heavy-inspection.jpg",
      title: "Trusted by Aussie Car Buyers",
      subtitle:
        "Accurate, independent reports that help you make the right choice",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />

              {/* Light Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  {/* Title with enhanced styling */}
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>

                  {/* Subtitle with enhanced styling */}
                  <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  {/* Enhanced CTA Button */}
                  <Link
                    href="/book-inspection"
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-10 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:border-white/20"
                  >
                    Book an Inspection
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>
    </section>
  );
};

export default Hero;
