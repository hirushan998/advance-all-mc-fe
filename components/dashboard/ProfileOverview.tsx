'use client';

import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, MapPin, Edit } from 'lucide-react';
import Link from 'next/link';

export default function ProfileOverview() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
        <Link 
          href="/dashboard/profile" 
          className="text-blue-600 hover:text-blue-800"
        >
          <Edit className="h-5 w-5" />
        </Link>
      </div>
      
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">
          {user?.name || 'User Name'}
        </h3>
        <p className="text-gray-500">Customer</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-sm">
          <Mail className="h-4 w-4 text-gray-400 mr-3" />
          <span className="text-gray-600">{user?.email || 'email@example.com'}</span>
        </div>
        <div className="flex items-center text-sm">
          <Phone className="h-4 w-4 text-gray-400 mr-3" />
          <span className="text-gray-600">{user?.phone || '+1 (555) 123-4567'}</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 text-gray-400 mr-3" />
          <span className="text-gray-600">{user?.address || 'City, State'}</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Member since</span>
          <span className="text-gray-900">Jan 2024</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-gray-500">Total inspections</span>
          <span className="text-gray-900">12</span>
        </div>
      </div>
    </div>
  );
}