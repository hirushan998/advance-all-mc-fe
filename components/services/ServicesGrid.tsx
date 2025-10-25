'use client';

import Link from 'next/link';

const ServicesGrid = () => {

  const services = [
    {
      id: 1,
      title: 'Engine Diagnostics',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete engine diagnostic services using advanced computer systems to identify and resolve engine issues quickly and accurately.',
      features: ['Computer diagnostics', 'Error code reading', 'Performance testing', 'Repair recommendations'],
      price: 'Starting at $89',
      link: '/services/engine-diagnostics'
    },
    {
      id: 2,
      title: 'Oil Change & Filter',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Regular oil changes and filter replacements to keep your engine running smoothly and extend its lifespan.',
      features: ['Premium oil options', 'Filter replacement', 'Fluid level check', 'Multi-point inspection'],
      price: 'Starting at $39',
      link: '/services/oil-change'
    },
    {
      id: 3,
      title: 'Brake Services',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brake system inspection, repair, and replacement services for your safety and peace of mind.',
      features: ['Brake pad replacement', 'Rotor resurfacing', 'Brake fluid service', 'Safety inspection'],
      price: 'Starting at $149',
      link: '/services/brake-services'
    },
    {
      id: 4,
      title: 'Transmission Repair',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf7c0d8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Expert transmission diagnostics, repair, and maintenance to ensure smooth shifting and optimal performance.',
      features: ['Transmission diagnostics', 'Fluid service', 'Repair & rebuild', 'Performance optimization'],
      price: 'Starting at $199',
      link: '/services/transmission'
    },
    {
      id: 5,
      title: 'Air Conditioning',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'AC system repair and maintenance to keep you comfortable in all weather conditions.',
      features: ['AC diagnostics', 'Refrigerant service', 'Component replacement', 'Performance testing'],
      price: 'Starting at $79',
      link: '/services/air-conditioning'
    },
    {
      id: 6,
      title: 'Belts & Hoses',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Inspection and replacement of belts and hoses to prevent breakdowns and maintain optimal performance.',
      features: ['Visual inspection', 'Replacement service', 'Preventive maintenance', 'Quality parts'],
      price: 'Starting at $59',
      link: '/services/belts-hoses'
    },
    {
      id: 7,
      title: 'Battery Service',
      image: 'https://images.unsplash.com/photo-1609592806787-3d0b4c7b0e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Battery testing, replacement, and electrical system diagnostics to keep your vehicle starting reliably.',
      features: ['Battery testing', 'Replacement service', 'Charging system check', 'Electrical diagnostics'],
      price: 'Starting at $129',
      link: '/services/battery'
    },
    {
      id: 8,
      title: 'Tire Services',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete tire services including installation, rotation, balancing, and alignment for optimal performance.',
      features: ['Tire installation', 'Rotation & balancing', 'Alignment service', 'Pressure monitoring'],
      price: 'Starting at $25',
      link: '/services/tires'
    },
    {
      id: 9,
      title: 'Suspension Repair',
      image: 'https://images.unsplash.com/photo-1609592806787-3d0b4c7b0e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Suspension system inspection and repair to ensure a smooth, safe, and comfortable ride.',
      features: ['Shock & strut service', 'Spring replacement', 'Alignment check', 'Ride quality testing'],
      price: 'Starting at $179',
      link: '/services/suspension'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Professional Auto Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, our certified technicians provide 
            comprehensive automotive services to keep your vehicle running at its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServicesGrid;