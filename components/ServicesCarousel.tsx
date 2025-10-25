'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServicesCarousel = () => {
  const services = [
    {
      id: 1,
      title: 'ENGINE DIAGNOSTICS',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      description: 'Complete engine diagnostic services using advanced computer systems to identify and resolve engine issues.',
      link: '/services/engine-diagnostics'
    },
    {
      id: 2,
      title: 'LUBE, OIL AND FILTERS',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      description: 'Regular oil changes and filter replacements to keep your engine running smoothly and efficiently.',
      link: '/services/oil-change'
    },
    {
      id: 3,
      title: 'BELTS AND HOSES',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
      description: 'Inspection and replacement of belts and hoses to prevent breakdowns and maintain optimal performance.',
      link: '/services/belts-hoses'
    },
    {
      id: 4,
      title: 'BRAKE SERVICES',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      description: 'Complete brake system inspection, repair, and replacement services for your safety and peace of mind.',
      link: '/services/brake-services'
    },
    {
      id: 5,
      title: 'TRANSMISSION REPAIR',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf7c0d8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      description: 'Expert transmission diagnostics, repair, and maintenance to ensure smooth shifting and performance.',
      link: '/services/transmission'
    },
    {
      id: 6,
      title: 'AIR CONDITIONING',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
      description: 'AC system repair and maintenance to keep you comfortable in all weather conditions.',
      link: '/services/air-conditioning'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            AUTO REPAIR SERVICES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a full range of garage services to vehicle owners located in Tucson area.
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
              nextEl: '.services-button-next',
              prevEl: '.services-button-prev',
            }}
            pagination={{
              el: '.services-pagination',
              clickable: true,
              bulletClass: 'services-pagination-bullet',
              bulletActiveClass: 'services-pagination-bullet-active',
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
                slidesPerView: 3,
              },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {/* Service Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary hover:text-primary-600 font-semibold text-sm transition-colors duration-300"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="services-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="services-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="services-pagination flex justify-center space-x-2 mb-12"></div>

        {/* CTA Button */}
        <div className="text-center">
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