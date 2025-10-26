"use client";

import { useState, useEffect } from "react";

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const googleReviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent mobile inspection service! They came to my location and provided a thorough inspection of the used car I was considering. The report was detailed and helped me make an informed decision. Highly professional and knowledgeable.",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 month ago",
      text: "Outstanding service! The inspector was punctual, professional, and extremely thorough. The digital report I received was comprehensive with photos and detailed explanations. Saved me from buying a car with hidden issues. Worth every penny!",
      verified: true,
    },
    {
      id: 3,
      name: "Jennifer Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "3 weeks ago",
      text: "Amazing experience! The mobile inspection was convenient and the inspector explained everything clearly. The report helped me negotiate a better price on my vehicle purchase. Professional, reliable, and highly recommended!",
      verified: true,
    },
    {
      id: 4,
      name: "David Thompson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 week ago",
      text: "Top-notch service! The inspector was knowledgeable and found several issues that weren't obvious to me. The detailed report with photos was incredibly helpful. Great value for money and peace of mind.",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 months ago",
      text: "Fantastic mobile inspection service! They were flexible with scheduling and the inspector was very thorough. The report was delivered quickly and was easy to understand. Definitely recommend for anyone buying a used vehicle.",
      verified: true,
    },
  ];

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % googleReviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [googleReviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const averageRating = 5.0;
  const totalReviews = 127;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          {/* Google Reviews Summary */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-gray-800">
                Google Reviews
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-lg font-bold text-gray-800">
                {averageRating}
              </span>
              <span className="text-gray-600">({totalReviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {googleReviews.slice(0, 3).map((review, index) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-800">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-5 h-5 opacity-60"
                />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Review Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {googleReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
