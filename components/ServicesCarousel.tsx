"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServicesCarousel = () => {
  const services = [
    {
      id: 1,
      title: "EXOTIC",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      description:
        "Specialized inspection services for exotic and luxury vehicles with advanced diagnostic systems.",
      link: "/services/exotic",
    },
    {
      id: 2,
      title: "STANDARD",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
      description:
        "Comprehensive inspection services for standard passenger vehicles and everyday cars.",
      link: "/services/standard",
    },
    {
      id: 3,
      title: "CLASSIC",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Expert inspection services for classic and vintage vehicles with specialized knowledge.",
      link: "/services/classic",
    },
    {
      id: 4,
      title: "COMMERCIAL",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description:
        "Professional inspection services for commercial vehicles, trucks, and fleet vehicles.",
      link: "/services/commercial",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Mobile Pre-Purchase Vehicle Inspections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a full range of garage services to vehicle owners located
            in Tucson area.
            <br />
            Our professionals know how to handle a wide range of car services.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".services-button-next",
              prevEl: ".services-button-prev",
            }}
            pagination={{
              el: ".services-pagination",
              clickable: true,
              bulletClass: "services-pagination-bullet",
              bulletActiveClass: "services-pagination-bullet-active",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Package Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Package
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {service.title} INSPECTION
                    </h3>

                    {/* Service Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow text-center">
                      {service.description}
                    </p>

                    {/* Package Features */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Mobile Service
                        </span>
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Detailed Report
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mt-auto">
                      <Link
                        href={service.link}
                        className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </Link>

                      <Link
                        href={`/sample-report/${service.title.toLowerCase()}`}
                        className="w-full inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300"
                      >
                        View Sample Report
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="services-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
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

          <button className="services-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
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
        </div>

        {/* Custom Pagination */}
        <div className="services-pagination flex justify-center space-x-2 mb-12"></div>

        {/* CTA Buttons */}
        <div className="text-center space-x-4">
          <Link
            href="/services"
            className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-none transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
