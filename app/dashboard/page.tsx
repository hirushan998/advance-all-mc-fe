'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentBookings from '@/components/dashboard/RecentBookings';
import QuickActions from '@/components/dashboard/QuickActions';
import ProfileOverview from '@/components/dashboard/ProfileOverview';

export default function Dashboard() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name || 'User'}!
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your vehicle inspections and bookings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <RecentBookings />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ProfileOverview />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}