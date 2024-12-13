import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ChannelSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ChannelSearch({ value, onChange }: ChannelSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Channel"
        className="w-full bg-[#2E2E2E] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
    </div>
  );
}