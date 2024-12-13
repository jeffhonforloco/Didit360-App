import React, { useEffect } from 'react';
import { useAdminStore } from '../../stores/adminStore';
import { useSocket } from '../../hooks/useSocket';

export function Analytics() {
  const { analytics, fetchAnalytics } = useAdminStore();
  const socket = useSocket();

  useEffect(() => {
    fetchAnalytics();

    socket.onAnalyticsUpdate((data) => {
      fetchAnalytics();
    });
  }, [fetchAnalytics]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-[#2E2E2E] rounded-lg p-6">
        <h3 className="text-gray-400 text-sm">Total Users</h3>
        <p className="text-2xl font-semibold text-white mt-2">
          {analytics.totalUsers.toLocaleString()}
        </p>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg p-6">
        <h3 className="text-gray-400 text-sm">Active Streams</h3>
        <p className="text-2xl font-semibold text-white mt-2">
          {analytics.activeStreams}
        </p>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg p-6">
        <h3 className="text-gray-400 text-sm">Total Content</h3>
        <p className="text-2xl font-semibold text-white mt-2">
          {analytics.totalContent.toLocaleString()}
        </p>
      </div>

      <div className="bg-[#2E2E2E] rounded-lg p-6">
        <h3 className="text-gray-400 text-sm">Revenue</h3>
        <p className="text-2xl font-semibold text-white mt-2">
          ${analytics.revenue.toLocaleString()}
        </p>
      </div>
    </div>
  );
}