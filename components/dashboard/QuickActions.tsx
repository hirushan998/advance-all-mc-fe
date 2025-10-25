'use client';

import { Plus, Calendar, FileText, Settings, Phone } from 'lucide-react';
import Link from 'next/link';

const actions = [
  {
    name: 'Book Inspection',
    href: '/book-inspection',
    icon: Plus,
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Schedule a new vehicle inspection'
  },
  {
    name: 'View Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
    color: 'bg-green-600 hover:bg-green-700',
    description: 'See all your appointments'
  },
  {
    name: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    color: 'bg-purple-600 hover:bg-purple-700',
    description: 'Download inspection reports'
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    color: 'bg-gray-600 hover:bg-gray-700',
    description: 'Manage your account'
  },
  {
    name: 'Contact Support',
    href: '/contact',
    icon: Phone,
    color: 'bg-orange-600 hover:bg-orange-700',
    description: 'Get help when you need it'
  }
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.name}
              href={action.href}
              className={`${action.color} text-white rounded-lg p-4 block hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex items-center">
                <Icon className="h-6 w-6 mr-3" />
                <div>
                  <h3 className="font-medium">{action.name}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}