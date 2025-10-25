'use client';

import { Calendar, MapPin, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const bookings = [
  {
    id: 1,
    vehicleType: '2020 Honda Civic',
    service: 'Pre-Purchase Inspection',
    date: '2024-11-15',
    time: '10:00 AM',
    location: 'Downtown Service Center',
    status: 'confirmed',
    inspector: 'John Smith'
  },
  {
    id: 2,
    vehicleType: '2018 Toyota Camry',
    service: 'Annual Safety Inspection',
    date: '2024-11-10',
    time: '2:00 PM',
    location: 'North Branch',
    status: 'completed',
    inspector: 'Sarah Johnson'
  },
  {
    id: 3,
    vehicleType: '2022 Ford F-150',
    service: 'Insurance Inspection',
    date: '2024-11-08',
    time: '11:30 AM',
    location: 'Mobile Service',
    status: 'completed',
    inspector: 'Mike Davis'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function RecentBookings() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
          <Link 
            href="/dashboard/bookings" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {bookings.map((booking) => (
          <div key={booking.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {booking.vehicleType}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{booking.service}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {booking.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {booking.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {booking.location}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Inspector: {booking.inspector}
                </p>
              </div>
              <div className="ml-4">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}