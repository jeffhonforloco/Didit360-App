import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  ChatBubbleLeftIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', icon: ChartBarIcon, path: '/admin/dashboard' },
  { name: 'User Management', icon: UsersIcon, path: '/admin/users' },
  { name: 'Content Management', icon: DocumentTextIcon, path: '/admin/content' },
  { name: 'Live Streaming', icon: VideoCameraIcon, path: '/admin/streaming' },
  { name: 'Open Communication', icon: ChatBubbleLeftIcon, path: '/admin/communication' },
  { name: 'API Management', icon: CogIcon, path: '/admin/api' },
  { name: 'Support & Center', icon: QuestionMarkCircleIcon, path: '/admin/support' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/admin/settings' },
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