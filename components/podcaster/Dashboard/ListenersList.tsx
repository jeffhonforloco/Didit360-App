import React from 'react';

interface Listener {
  id: string;
  name: string;
  date: string;
  location: string;
  duration: string;
}

export function ListenersList() {
  const listeners: Listener[] = [
    { id: '1', name: 'Frank Davis', date: 'Nov 1, 2023', location: '214 S Alameda Ave', duration: '1:23' },
    { id: '2', name: 'Thomas Smith', date: 'Nov 10, 2023', location: '1080 Brooke Ave', duration: '2:45' },
    { id: '3', name: 'Bill Martin', date: 'Nov 15, 2023', location: '3890 Royal Ave', duration: '0:45' },
  ];

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
              <p className="text-gray-400">{listener.date}</p>
              <p className="text-gray-400 text-sm">{listener.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}