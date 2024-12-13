import React from 'react';
import { StatsOverview } from './StatsOverview';
import { ListeningChart } from './ListeningChart';
import { RecentListeners } from './RecentListeners';
import { usePodcasterStore } from '../../../stores/podcasterStore';
import { LoadingSpinner } from '../../common/LoadingSpinner';

export function Dashboard() {
  const { stats, isLoading } = usePodcasterStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <StatsOverview stats={stats} />
      <ListeningChart />
      <RecentListeners />
    </div>
  );
}