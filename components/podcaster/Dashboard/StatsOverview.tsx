import React from 'react';
import { StatsCard } from './StatsCard';

interface Stats {
  monthlyListeners: number;
  totalStreams: number;
  totalEpisodes: number;
  revenue: number;
}

interface StatsOverviewProps {
  stats: Stats;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatsCard
        title="Monthly Listeners"
        value={stats.monthlyListeners}
        subtitle="Active listeners"
      />
      <StatsCard
        title="Total Streams"
        value={stats.totalStreams}
        subtitle="Total streams"
      />
      <StatsCard
        title="Total Episodes"
        value={stats.totalEpisodes}
        subtitle="Published episodes"
      />
      <StatsCard
        title="Revenue"
        value={stats.revenue}
        subtitle="Monthly earnings"
      />
    </div>
  );
}