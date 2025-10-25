'use client';

import { Calendar, CheckCircle, Clock, Car } from 'lucide-react';

const stats = [
  {
    name: 'Total Inspections',
    value: '12',
    icon: Car,
    color: 'bg-blue-500',
    change: '+2 this month'
  },
  {
    name: 'Completed',
    value: '8',
    icon: CheckCircle,
    color: 'bg-green-500',
    change: '+1 this week'
  },
  {
    name: 'Pending',
    value: '3',
    icon: Clock,
    color: 'bg-yellow-500',
    change: 'Due soon'
  },
  {
    name: 'Scheduled',
    value: '1',
    icon: Calendar,
    color: 'bg-purple-500',
    change: 'Next: Tomorrow'
  }
];

export default function DashboardStats() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className={`${stat.color} p-2 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}