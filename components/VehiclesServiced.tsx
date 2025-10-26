import Link from "next/link";

const ServiceAreas = () => {
  const serviceAreas = [
    { name: "Sydney", state: "NSW" },
    { name: "Melbourne", state: "VIC" },
    { name: "Brisbane", state: "QLD" },
    { name: "Perth", state: "WA" },
    { name: "Adelaide", state: "SA" },
    { name: "Canberra", state: "ACT" },
    { name: "Darwin", state: "NT" },
    { name: "Hobart", state: "TAS" },
  ];

  return (
    <section className="bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
          {/* Left Side - Australia Map */}
          <div className="relative bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl relative">
              {/* Australia Map Image */}
              <div className="relative">
                <img
                  src="/aus-map.png"
                  alt="Australia Map"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                
                {/* Overlay with city markers */}
                <div className="absolute inset-0">
                  {/* Perth */}
                  <div className="absolute" style={{ left: '15%', top: '55%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-6 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Perth</span>
                  </div>
                  
                  {/* Darwin */}
                  <div className="absolute" style={{ left: '45%', top: '15%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-7 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Darwin</span>
                  </div>
                  
                  {/* Brisbane */}
                  <div className="absolute" style={{ left: '80%', top: '35%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-8 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Brisbane</span>
                  </div>
                  
                  {/* Sydney */}
                  <div className="absolute" style={{ left: '82%', top: '60%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-6 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Sydney</span>
                  </div>
                  
                  {/* Canberra */}
                  <div className="absolute" style={{ left: '78%', top: '70%' }}>
                    <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-8 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Canberra</span>
                  </div>
                  
                  {/* Melbourne */}
                  <div className="absolute" style={{ left: '75%', top: '80%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-9 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Melbourne</span>
                  </div>
                  
                  {/* Adelaide */}
                  <div className="absolute" style={{ left: '60%', top: '75%' }}>
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-8 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Adelaide</span>
                  </div>
                  
                  {/* Hobart */}
                  <div className="absolute" style={{ left: '75%', top: '95%' }}>
                    <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <span className="absolute -bottom-8 -left-7 text-sm font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">Hobart</span>
                  </div>
                </div>
                
                {/* Service coverage legend */}
                <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Service Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-gray-50 px-8 lg:px-16 py-16 flex items-center">
            <div className="w-full">
              {/* Section Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                SERVICE AREAS
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                We provide mobile pre-purchase vehicle inspection services across Australia.
                <br />
                Our certified inspectors are available in the following major cities and surrounding areas:
              </p>

              {/* Service Areas Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {area.name}, {area.state}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Mobile Service Coverage
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our mobile inspection service covers metropolitan areas and extends to surrounding suburbs. 
                  We travel to your location for convenient, professional vehicle inspections at your preferred time and place.
                </p>
              </div>

              {/* CTA Link */}
              <div>
                <Link
                  href="/book-inspection"
                  className="inline-flex items-center text-primary hover:text-primary-600 font-semibold text-sm transition-colors duration-300"
                >
                  BOOK INSPECTION
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
