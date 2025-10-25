'use client';

import { useState } from 'react';

interface BookingData {
  // Customer Info
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  licenseNumber: string;
  
  // Vehicle Details
  make: string;
  model: string;
  year: string;
  vehicleCategory: string;
  
  // Seller Information
  sellerName: string;
  sellerContact: string;
  
  // Package
  selectedPackage: string;
  
  // Date & Time
  selectedDate: string;
  selectedTime: string;
  
  // Optional Services
  optionalServices: string[];
}

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    licenseNumber: '',
    make: '',
    model: '',
    year: '',
    vehicleCategory: '',
    sellerName: '',
    sellerContact: '',
    selectedPackage: '',
    selectedDate: '',
    selectedTime: '',
    optionalServices: []
  });

  const steps = [
    { number: 1, title: 'Customer Info', description: 'Customer\nInfo' },
    { number: 2, title: 'Vehicle Details', description: 'Vehicle\nDetails' },
    { number: 3, title: 'Package', description: 'Package' },
    { number: 4, title: 'Date & Time', description: 'Date &\nTime' },
    { number: 5, title: 'Optional Services', description: 'Optional\nServices' },
    { number: 6, title: 'Review', description: 'Review' }
  ];

  const packages = [
    {
      id: 'light',
      title: 'Light Vehicle',
      subtitle: 'Up to 4.5T',
      price: '$320',
      features: [
        'Complete inspection',
        'Detailed report',
        'Photo documentation'
      ]
    },
    {
      id: 'medium',
      title: 'Medium Vehicle',
      subtitle: '4.5T to 8T',
      price: '$400',
      features: [
        'Complete inspection',
        'Detailed report',
        'Photo documentation',
        'Brake test'
      ]
    },
    {
      id: 'heavy',
      title: 'Heavy Vehicle',
      subtitle: '8T to 12T',
      price: '$450',
      features: [
        'Complete inspection',
        'Detailed report',
        'Photo documentation',
        'Brake test',
        'Load test'
      ]
    },
    {
      id: 'extra-heavy',
      title: 'Extra Heavy',
      subtitle: '12T to 16T',
      price: '$450',
      features: [
        'Complete inspection',
        'Detailed report',
        'Photo documentation',
        'Brake test',
        'Load test',
        'Structural analysis'
      ]
    }
  ];

  const vehicleCategories = [
    'Passenger Car',
    'SUV',
    'Truck',
    'Van',
    'Motorcycle',
    'Bus',
    'Commercial Vehicle',
    'Other'
  ];

  const optionalServicesList = [
    { 
      id: 'electronic-diagnostics', 
      name: 'Electronic Diagnostics', 
      price: '+$80',
      description: 'Comprehensive electronic system diagnostics using advanced tools'
    },
    { 
      id: 'coi-certificate', 
      name: 'COI Certificate', 
      price: '',
      description: 'Certificate of inspection for official documentation'
    },
    { 
      id: 'havras-inspection', 
      name: 'HAVRAS Inspection', 
      price: '',
      description: 'Heavy Automotive Vehicle Registration and Safety inspection'
    }
  ];

  const [specialComments, setSpecialComments] = useState('');
  const [selectedDates, setSelectedDates] = useState<Array<{date: string, time: string}>>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const addDateTime = () => {
    if (selectedDate && selectedTime) {
      setSelectedDates([...selectedDates, { date: selectedDate, time: selectedTime }]);
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  const removeDateTime = (index: number) => {
    setSelectedDates(selectedDates.filter((_, i) => i !== index));
  };

  const updateBookingData = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book Your Inspection
          </h1>
          <p className="text-lg text-gray-600">
            Complete the form below to schedule your vehicle inspection
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-12 overflow-x-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center min-w-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep === step.number
                      ? 'bg-primary text-white'
                      : currentStep > step.number
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {currentStep > step.number ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs font-medium text-gray-600 whitespace-pre-line">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  style={{ minWidth: '40px' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Customer Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Information</h2>
              <p className="text-gray-600 mb-8">Please provide your contact details</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={bookingData.fullName}
                    onChange={(e) => updateBookingData('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phoneNumber}
                    onChange={(e) => updateBookingData('phoneNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={bookingData.emailAddress}
                    onChange={(e) => updateBookingData('emailAddress', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="admin@hd.com"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    value={bookingData.address}
                    onChange={(e) => updateBookingData('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Driver's License Number *
                  </label>
                  <input
                    type="text"
                    value={bookingData.licenseNumber}
                    onChange={(e) => updateBookingData('licenseNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="DL123456789"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Vehicle Details */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Details</h2>
              <p className="text-gray-600 mb-8">Tell us about the vehicle you want inspected</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    value={bookingData.make}
                    onChange={(e) => updateBookingData('make', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Toyota"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    value={bookingData.model}
                    onChange={(e) => updateBookingData('model', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Camry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="text"
                    value={bookingData.year}
                    onChange={(e) => updateBookingData('year', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="2020"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Category *
                  </label>
                  <select
                    value={bookingData.vehicleCategory}
                    onChange={(e) => updateBookingData('vehicleCategory', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    {vehicleCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Seller Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seller Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.sellerName}
                    onChange={(e) => updateBookingData('sellerName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seller Contact
                  </label>
                  <input
                    type="text"
                    value={bookingData.sellerContact}
                    onChange={(e) => updateBookingData('sellerContact', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Package Selection */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Inspection Package</h2>
              <p className="text-gray-600 mb-8">Choose the package that matches your vehicle weight</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => updateBookingData('selectedPackage', pkg.id)}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      bookingData.selectedPackage === pkg.id
                        ? 'border-primary bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{pkg.title}</h3>
                        <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Date & Time */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Preferred Date & Time</h2>
              <p className="text-gray-600 mb-8">Select multiple preferred dates and times for your inspection</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Picker */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Date</h3>
                  <div className="border border-gray-300 rounded-lg p-4">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h4 className="text-lg font-semibold">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h4>
                      <button
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <div key={day} className="p-2 font-semibold text-gray-600">{day}</div>
                      ))}
                      
                      {/* Calendar Days */}
                      {Array.from({ length: 42 }, (_, i) => {
                        const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
                        const startDate = new Date(firstDay);
                        startDate.setDate(startDate.getDate() - firstDay.getDay());
                        const currentDate = new Date(startDate);
                        currentDate.setDate(currentDate.getDate() + i);
                        
                        const isCurrentMonth = currentDate.getMonth() === currentMonth.getMonth();
                        const isToday = currentDate.toDateString() === new Date().toDateString();
                        const isPast = currentDate < new Date();
                        const dateString = currentDate.toISOString().split('T')[0];
                        const isSelected = selectedDate === dateString;
                        
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => !isPast && setSelectedDate(dateString)}
                            disabled={isPast}
                            className={`p-2 rounded text-sm ${
                              !isCurrentMonth 
                                ? 'text-gray-300' 
                                : isPast 
                                ? 'text-gray-400 cursor-not-allowed'
                                : isSelected
                                ? 'bg-primary text-white'
                                : isToday
                                ? 'bg-blue-100 text-primary font-semibold'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {currentDate.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time Picker */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Time</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 hover:border-primary hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addDateTime}
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedDate && selectedTime
                        ? 'bg-primary text-white hover:bg-primary-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add Date & Time
                  </button>
                </div>
              </div>

              {/* Selected Dates */}
              {selectedDates.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Dates & Times</h3>
                  <div className="space-y-2">
                    {selectedDates.map((dateTime, index) => (
                      <div key={index} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <span className="text-gray-700">
                          {new Date(dateTime.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at {dateTime.time}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeDateTime(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Optional Services */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Optional Services</h2>
              <p className="text-gray-600 mb-8">Enhance your inspection with additional services</p>
              
              <div className="space-y-4 mb-8">
                {optionalServicesList.map((service) => (
                  <div
                    key={service.id}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      bookingData.optionalServices.includes(service.id)
                        ? 'border-primary bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => {
                      const services = bookingData.optionalServices.includes(service.id)
                        ? bookingData.optionalServices.filter(s => s !== service.id)
                        : [...bookingData.optionalServices, service.id];
                      updateBookingData('optionalServices', services);
                    }}
                  >
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id={service.id}
                        checked={bookingData.optionalServices.includes(service.id)}
                        onChange={() => {}} // Handled by div onClick
                        className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1 mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                          {service.price && (
                            <span className="text-lg font-bold text-primary">{service.price}</span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Comments */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Special Comments</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Any additional information or special requests for the inspection
                </p>
                <textarea
                  value={specialComments}
                  onChange={(e) => setSpecialComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Enter any special requirements or comments..."
                />
              </div>
            </div>
          )}

          {/* Step 6: Review */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Your Booking</h2>
              <p className="text-gray-600 mb-8">Please review all details before submitting</p>
              
              <div className="space-y-6">
                {/* Customer Information */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Customer Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-600">Name:</span> <span className="font-medium ml-2">{bookingData.fullName}</span></div>
                    <div><span className="text-gray-600">Email:</span> <span className="font-medium ml-2">{bookingData.emailAddress}</span></div>
                    <div><span className="text-gray-600">Phone:</span> <span className="font-medium ml-2">{bookingData.phoneNumber}</span></div>
                    <div><span className="text-gray-600">License:</span> <span className="font-medium ml-2">{bookingData.licenseNumber}</span></div>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Vehicle Details</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-600">Vehicle:</span> <span className="font-medium ml-2">{bookingData.year} {bookingData.make} {bookingData.model}</span></div>
                    <div><span className="text-gray-600">Category:</span> <span className="font-medium ml-2">{bookingData.vehicleCategory}</span></div>
                  </div>
                </div>

                {/* Inspection Package */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Inspection Package</h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{packages.find(p => p.id === bookingData.selectedPackage)?.title}</span>
                    <span className="text-2xl font-bold text-primary">{packages.find(p => p.id === bookingData.selectedPackage)?.price}</span>
                  </div>
                </div>

                {/* Preferred Dates & Times */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Preferred Dates & Times</h3>
                  </div>
                  {selectedDates.length > 0 ? (
                    <div className="space-y-2">
                      {selectedDates.map((dateTime, index) => (
                        <div key={index} className="text-sm">
                          <span className="font-medium">
                            {new Date(dateTime.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })} at {dateTime.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No preferred dates selected</p>
                  )}
                </div>

                {/* Total Price */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800">Total Price</span>
                    <span className="text-3xl font-bold text-primary">
                      {packages.find(p => p.id === bookingData.selectedPackage)?.price || '$0'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                      PENDING
                    </span>
                    <span className="ml-2">Status: Awaiting confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>

            {currentStep < 6 ? (
              <button
                onClick={nextStep}
                className="flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                Next
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 text-lg"
              >
                Submit Inquiry
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;