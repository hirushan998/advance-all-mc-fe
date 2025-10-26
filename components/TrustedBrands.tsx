"use client";

const TrustedBrands = () => {
  const brands = [
    // Passenger Vehicle Brands
    {
      name: "Toyota",
      logo: "https://cdn.worldvectorlogo.com/logos/toyota-6.svg",
    },
    {
      name: "Honda",
      logo: "https://cdn.worldvectorlogo.com/logos/honda-6.svg",
    },
    {
      name: "Ford",
      logo: "https://cdn.worldvectorlogo.com/logos/ford-6.svg",
    },
    {
      name: "Chevrolet",
      logo: "https://cdn.worldvectorlogo.com/logos/chevrolet-logo-2013.svg",
    },
    {
      name: "BMW",
      logo: "https://cdn.worldvectorlogo.com/logos/bmw-logo-2020.svg",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg",
    },
    {
      name: "Nissan",
      logo: "https://cdn.worldvectorlogo.com/logos/nissan-6.svg",
    },
    {
      name: "Volkswagen",
      logo: "https://cdn.worldvectorlogo.com/logos/volkswagen-vw.svg",
    },
    {
      name: "Audi",
      logo: "https://cdn.worldvectorlogo.com/logos/audi-11.svg",
    },
    {
      name: "Hyundai",
      logo: "https://cdn.worldvectorlogo.com/logos/hyundai-motor-company.svg",
    },
    {
      name: "Mazda",
      logo: "https://cdn.worldvectorlogo.com/logos/mazda-6.svg",
    },
    {
      name: "Subaru",
      logo: "https://cdn.worldvectorlogo.com/logos/subaru-6.svg",
    },
    // Commercial Vehicle Brands
    {
      name: "Isuzu",
      logo: "https://cdn.worldvectorlogo.com/logos/isuzu-6.svg",
    },
    {
      name: "Hino",
      logo: "https://cdn.worldvectorlogo.com/logos/hino-1.svg",
    },
    {
      name: "Fuso",
      logo: "https://cdn.worldvectorlogo.com/logos/mitsubishi-fuso.svg",
    },
    {
      name: "Kenworth",
      logo: "https://cdn.worldvectorlogo.com/logos/kenworth-1.svg",
    },
    {
      name: "Volvo",
      logo: "https://cdn.worldvectorlogo.com/logos/volvo-6.svg",
    },
    {
      name: "Scania",
      logo: "https://cdn.worldvectorlogo.com/logos/scania-3.svg",
    },
    {
      name: "MAN",
      logo: "https://cdn.worldvectorlogo.com/logos/man-se.svg",
    },
    {
      name: "Mack",
      logo: "https://cdn.worldvectorlogo.com/logos/mack-trucks-1.svg",
    },
    {
      name: "Iveco",
      logo: "https://cdn.worldvectorlogo.com/logos/iveco-2.svg",
    },
    {
      name: "DAF",
      logo: "https://cdn.worldvectorlogo.com/logos/daf-2.svg",
    },
    {
      name: "Freightliner",
      logo: "https://cdn.worldvectorlogo.com/logos/freightliner-1.svg",
    },
    {
      name: "Western Star",
      logo: "https://cdn.worldvectorlogo.com/logos/western-star-trucks.svg",
    },
  ];

  return (
    <section className="py-20 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            TRUSTED BRANDS WE INSPECT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are certified to inspect all major automotive brands. Our experienced inspectors have the expertise and tools to thoroughly evaluate your vehicle regardless of make or model.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-16 object-contain transition-all duration-300"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  // Fallback to text if image fails to load
                  const target = e.currentTarget;
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

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">All Makes & Models</h3>
            <p className="text-sm text-gray-600">From luxury vehicles to commercial trucks, we inspect all types of vehicles with equal expertise.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Certified Inspectors</h3>
            <p className="text-sm text-gray-600">Our team is trained and certified to work on all major automotive brands and their specific systems.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Equipment</h3>
            <p className="text-sm text-gray-600">We use the latest diagnostic tools and equipment suitable for all vehicle makes and models.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Vehicle Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Inspections Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            No matter what vehicle you're considering, we have the expertise to inspect it thoroughly.
          </p>
          <a
            href="/book-inspection"
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Book Your Vehicle Inspection
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;