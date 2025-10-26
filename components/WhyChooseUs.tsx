import Link from "next/link";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Single Image */}
          <div className="relative">
           {/* Main Image */}
<div className="w-full overflow-hidden">
  <Image
    src="/why-choose.png"
    alt="Professional Vehicle Inspection Service"
    width={1920}
    height={1080}
    className="w-full h-auto"
  />
</div>


            {/* Experience Badge */}
            <div className="absolute bottom-10 right-0 bg-primary-900 text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  8<span className="text-primary-400">+</span>
                </div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-primary-500 font-medium mb-2">
                About Advanced All Mechanical
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                On-Site Mobile
                <br />
                Per Purchase Vehicle
                <br />
                Inspection Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
              We bring expert vehicle inspections right to your location — no hassle, no hidden surprises. Our certified mobile mechanics carefully check every detail of the car, from engine and electronics to safety and history, giving you a clear, honest report before you buy. Trusted by Aussie car buyers for reliable, transparent inspections that help you make confident decisions.
              </p>
            </div>

            {/* Why Use Us Points */}
            <div className="space-y-6">
              {/* Thorough Checks */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Thorough Checks
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Full inspection inside, out, and underneath — no details
                    missed.
                  </p>
                </div>
              </div>

              {/* We Come to You */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    We Come to You
                  </h3>
                  <p className="text-gray-600 text-sm">
                    On-site inspections anywhere — dealer, home, or driveway.
                  </p>
                </div>
              </div>

              {/* Safety First */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Safety First
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We check all key safety parts for total peace of mind.
                  </p>
                </div>
              </div>

              {/* Clear Reports */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Clear Reports
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Easy-to-read reports with honest, transparent results.
                  </p>
                </div>
              </div>

              {/* Trusted Mechanics */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Trusted Mechanics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Skilled professionals focused on your confidence and safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    We Are Available 24 Hours
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    For Booking:{" "}
                    <span className="text-primary-500">0754933306</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
