'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Car, MapPin, Calendar, Download, CheckCircle, Clock } from 'lucide-react';

const bookings = [
  {
    id: 'BK-2024-001',
    bookingDate: '2024-01-15',
    vehicle: '2020 Toyota Camry',
    branch: 'Downtown Branch',
    package: 'Light Vehicle Inspection',
    inspectionDate: '2024-01-20',
    status: 'completed',
    price: '$400',
    paymentStatus: 'completed',
    inspectionProgress: 'Inspection in progress'
  },
  {
    id: 'BK-2024-002',
    bookingDate: '2024-01-18',
    vehicle: '2019 Honda Civic',
    branch: 'North Branch',
    package: 'Light Vehicle Inspection + Diagnostics',
    inspectionDate: '2024-01-25',
    status: 'paid',
    price: '$400',
    paymentStatus: 'completed',
    inspectionProgress: 'Inspection in progress'
  },
  {
    id: 'BK-2024-003',
    bookingDate: '2024-01-20',
    vehicle: '2021 Ford F-150',
    branch: 'East Branch',
    package: '4.5T to 8T Inspection',
    inspectionDate: '2024-01-28',
    status: 'approved',
    price: '$400',
    paymentStatus: 'pending'
  },
  {
    id: 'BK-2024-004',
    bookingDate: '2024-01-22',
    vehicle: '2022 Tesla Model 3',
    branch: 'West Branch',
    package: 'Light Vehicle Inspection',
    inspectionDate: 'Pending confirmation',
    status: 'pending',
    price: '$320',
    paymentStatus: 'pending'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return { bg: 'bg-green-100', text: 'text-green-800', label: 'COMPLETED' };
    case 'paid':
      return { bg: 'bg-green-100', text: 'text-green-800', label: 'PAID' };
    case 'approved':
      return { bg: 'bg-blue-100', text: 'text-blue-800', label: 'APPROVED' };
    case 'pending':
      return { bg: 'bg-orange-100', text: 'text-orange-800', label: 'PENDING' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', label: status.toUpperCase() };
  }
};

export default function BookingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage all your vehicle inspection bookings</p>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="divide-y divide-gray-200">
            {bookings.map((booking) => {
              const statusBadge = getStatusBadge(booking.status);
              
              return (
                <div key={booking.id} className="p-6">
                  {/* Booking Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">{booking.id}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                        {statusBadge.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Total Price</div>
                      <div className="text-2xl font-bold text-blue-600">{booking.price}</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Booked on {booking.bookingDate}
                  </div>

                  {/* Booking Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Vehicle */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Vehicle</div>
                        <div className="font-medium text-gray-900">{booking.vehicle}</div>
                      </div>
                    </div>

                    {/* Branch */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Branch</div>
                        <div className="font-medium text-gray-900">{booking.branch}</div>
                      </div>
                    </div>

                    {/* Package */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Package</div>
                        <div className="font-medium text-gray-900">{booking.package}</div>
                      </div>
                    </div>

                    {/* Inspection Date */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Inspection Date</div>
                        <div className="font-medium text-gray-900">{booking.inspectionDate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons and Status */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Payment Status */}
                      {booking.paymentStatus === 'completed' && (
                        <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Payment Completed</span>
                          {booking.inspectionProgress && (
                            <span className="text-sm text-green-600">• {booking.inspectionProgress}</span>
                          )}
                        </div>
                      )}
                      
                      {booking.paymentStatus === 'pending' && booking.status === 'pending' && (
                        <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
                          <Clock className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-800">Awaiting Admin Approval</span>
                          <span className="text-sm text-orange-600">• Payment pending</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-3">
                      {/* Download Report Button */}
                      {booking.status === 'completed' && (
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </button>
                      )}
                      
                      {/* Pay Now Button */}
                      {booking.status === 'approved' && booking.paymentStatus === 'pending' && (
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Pay Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}