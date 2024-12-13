```typescript
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Channel } from '../../../types/channel';

interface ChannelListProps {
  channels: Channel[];
  onJoinChannel: (channelId: string) => void;
}

export function ChannelList({ channels, onJoinChannel }: ChannelListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Distribution</h2>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Channel"
            className="bg-[#2E2E2E] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredChannels.map((channel) => (
          <div key={channel.id} className="flex items-center justify-between bg-[#2E2E2E] p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={channel.avatar}
                alt={channel.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-medium">{channel.name}</span>
            </div>
            <button
              onClick={() => onJoinChannel(channel.id)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Join Channel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```