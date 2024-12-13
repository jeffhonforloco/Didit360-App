import React from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../stores/authStore';

export function TopBar() {
  const { user } = useAuthStore();

  return (
    <div className="h-16 bg-[#1E1E1E] border-b border-[#2E2E2E] flex items-center justify-between px-6">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#2E2E2E] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white">
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src={user?.avatar || '/default-avatar.png'}
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-white">{user?.name}</span>
        </div>
      </div>
    </div>
  );
}