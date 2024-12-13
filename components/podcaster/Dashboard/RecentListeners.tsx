```typescript
import React from 'react';
import { formatRelativeTime } from '../../../utils/formatters/dateFormatter';
import { usePodcasterStore } from '../../../stores/podcasterStore';

export function RecentListeners() {
  const { listeners } = usePodcasterStore();

  return (
    <div className="bg-[#2E2E2E] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Listeners</h2>
      <div className="space-y-4">
        {listeners.map((listener) => (
          <div key={listener.id} className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">{listener.name}</p>
              <p className="text-gray-400 text-sm">{listener.location}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">{formatRelativeTime(listener.timestamp)}</p>
              <p className="text-gray-400 text-sm">{listener.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```