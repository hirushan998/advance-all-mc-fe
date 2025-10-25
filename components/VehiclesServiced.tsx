import Link from "next/link";

const VehiclesServiced = () => {
  const vehicleMakes = [
    { name: "General Motors", checked: true },
    { name: "Ford Motor", checked: true },
    { name: "Chrysler", checked: true },
    { name: "Toyota", checked: true },
    { name: "Mercedes - Benz", checked: true },
    { name: "Mercury", checked: true },
    { name: "Mitsubishi", checked: true },
    { name: "Nissan", checked: true },
    { name: "Infiniti", checked: true },
    { name: "Plymouth", checked: true },
    { name: "Pontiac Porsche", checked: true },
    { name: "BMW", checked: true },
    { name: "Saturn", checked: true },
  ];

  return (
    <section className="bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image */}
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://unsplash.com/photos/car-diagnostic-service-and-electronics-repair-by-mechanic-worker-_e1T9ZTzJvY&auto=format&fit=crop&w=2832&q=80')`,
              }}
            />
            {/* Optional overlay for better contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-gray-50 px-8 lg:px-16 py-16 flex items-center">
            <div className="w-full">
              {/* Section Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                VEHICLES SERVICED
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                We provide top notch maintenance service for all types of
                vehicles.
                <br />
                We are certified to service and repair the following makes:
              </p>

              {/* Vehicle Makes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {vehicleMakes.map((make, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {make.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-primary-600 font-semibold text-sm transition-colors duration-300"
                >
                  VIEW FULL LIST
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

export default VehiclesServiced;
