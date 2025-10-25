import Link from 'next/link';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'EVERY JOB IS PERSONAL',
      description: 'If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'BEST MATERIALS',
      description: 'We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'PROFESSIONAL STANDARDS',
      description: 'Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            WHY CHOOSE US?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are one of the leading auto repair shops serving customers in Tucson.
            <br />
            All mechanic services are performed by highly qualified mechanics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-primary rounded-full bg-white group-hover:bg-primary transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                {/* Hexagon Background Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 border border-gray-200 transform rotate-45 rounded-lg opacity-20"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
                {feature.title}
              </h3>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-none transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;