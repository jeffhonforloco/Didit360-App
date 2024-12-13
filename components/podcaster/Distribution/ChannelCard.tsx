import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface Channel {
  id: string;
  name: string;
  avatar: string;
  isJoined?: boolean;
}

interface ChannelCardProps {
  channel: Channel;
  onJoin: (channelId: string) => void;
  onLeave?: (channelId: string) => void;
}

export function ChannelCard({ channel, onJoin, onLeave }: ChannelCardProps) {
  return (
    <div className="flex items-center justify-between bg-[#2E2E2E] p-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={channel.avatar}
          alt={channel.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="text-white font-medium">{channel.name}</span>
      </div>
      {channel.isJoined ? (
        <button
          onClick={() => onLeave?.(channel.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Leave Channel
        </button>
      ) : (
        <button
          onClick={() => onJoin(channel.id)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Join Channel</span>
        </button>
      )}
    </div>
  );
}