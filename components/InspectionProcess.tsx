import Link from "next/link";
import Image from "next/image";

const InspectionProcess = () => {
  const inspectionSteps = [
    {
      number: "1",
      title: "ORDER INSPECTION",
      description:
        "Place an order for a vehicle inspection through the site or by phone.",
      buttons: [
        {
          text: "Book An Inspection",
          color: "bg-primary-600 hover:bg-primary-700",
          icon: "cursor",
        },
        {
          text: "(888) 231-7965",
          color: "bg-gray-600 hover:bg-gray-700",
          icon: "phone",
        },
      ],
    },
    {
      number: "2",
      title: "OUR INSPECTOR INSPECTS",
      description:
        "Our expert inspector will contact your seller to verify the availability of the vehicle and set up an appointment to inspect your automobile. The inspector will go directly to the vehicle to perform the inspection.",
    },
    {
      number: "3",
      title: "RECEIVE YOUR REPORT",
      description:
        "The inspector will upload the report to us, and after an intricate error checking and review process, you'll receive notification when your report is ready to login and view. You'll be notified the instant the report is ready to login and view.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 relative overflow-hidden">
      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 leading-tight">
                WHAT IS THE INSPECTION PROCESS?
              </h2>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {inspectionSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step Container */}
                  <div className="border-2 border-gray-500 rounded-lg p-6 bg-gray-800/70 backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      {/* Step Number Circle */}
                      <div className="shrink-0 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center border-2 border-gray-400">
                        <span className="text-white font-bold text-xl">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Buttons for first step */}
                        {step.buttons && (
                          <div className="flex flex-col sm:flex-row gap-3">
                            {step.buttons.map((button, btnIndex) => (
                              <button
                                key={btnIndex}
                                className={`${button.color} text-white px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2 min-w-[160px]`}
                              >
                                {button.icon === "phone" && (
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                  </svg>
                                )}
                                {button.icon === "cursor" && (
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                                <span>{button.text}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < inspectionSteps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-gray-500 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Process Image */}
          <div className="relative lg:block hidden">
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/process.jpg"
                alt="Vehicle Inspection Process"
                fill
                className="object-cover object-center"
              />

              {/* Gradient Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionProcess;
