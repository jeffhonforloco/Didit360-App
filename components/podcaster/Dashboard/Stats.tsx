import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
}

function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <div className="bg-[#2E2E2E] p-6 rounded-lg">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold text-white mt-2">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatsCard
        title="Monthly Listeners"
        value="89,935"
        subtitle="Active listeners"
      />
      <StatsCard
        title="Total Streams"
        value="23,283.5"
        subtitle="Total streams"
      />
      <StatsCard
        title="Total Episodes"
        value="46,827"
        subtitle="Published episodes"
      />
      <StatsCard
        title="Revenue"
        value="$124,854"
        subtitle="Monthly earnings"
      />
    </div>
  );
}