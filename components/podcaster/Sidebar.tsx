import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ShieldCheckIcon,
  RssIcon,
  UserGroupIcon,
  BellIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', icon: ChartBarIcon, path: '/podcaster/dashboard' },
  { name: 'Music Submissions', icon: DocumentTextIcon, path: '/podcaster/submissions' },
  { name: 'Distribution', icon: RssIcon, path: '/podcaster/distribution' },
  { name: 'Metadata Mgt', icon: CogIcon, path: '/podcaster/metadata' },
  { name: 'Quality Checks', icon: ShieldCheckIcon, path: '/podcaster/quality' },
  { name: 'Revenue', icon: ChartBarIcon, path: '/podcaster/revenue' },
  { name: 'Stats & Performance', icon: ChartBarIcon, path: '/podcaster/stats' },
  { name: 'Support & Assistance', icon: QuestionMarkCircleIcon, path: '/podcaster/support' },
  { name: 'Terms & Condition', icon: DocumentTextIcon, path: '/podcaster/terms' },
  { name: 'Data Privacy', icon: ShieldCheckIcon, path: '/podcaster/privacy' },
  { name: 'Security', icon: ShieldCheckIcon, path: '/podcaster/security' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#1E1E1E] text-white">
      <div className="p-4">
        <img src="/logo.svg" alt="Logo" className="h-8" />
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm ${
                isActive 
                  ? 'bg-[#2E2E2E] border-l-4 border-green-500' 
                  : 'hover:bg-[#2E2E2E]'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}