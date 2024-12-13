import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../stores/authStore';

export function TopBar() {
  const { user } = useAuthStore();

  return (
    <div className="h-16 bg-[#1E1E1E] border-b border-[#2E2E2E] flex items-center justify-end px-6">
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
        </div>
      </div>
    </div>
  );
}