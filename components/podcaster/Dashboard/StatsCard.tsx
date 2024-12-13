```typescript
import React from 'react';
import { formatNumber } from '../../../utils/formatters/numberFormatter';

interface StatsCardProps {
  title: string;
  value: number;
  subtitle: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, subtitle, trend }: StatsCardProps) {
  return (
    <div className="bg-[#2E2E2E] p-6 rounded-lg">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold text-white mt-2">
        {formatNumber(value)}
      </p>
      <div className="flex items-center mt-1">
        <p className="text-sm text-gray-400">{subtitle}</p>
        {trend && (
          <span className={`ml-2 text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
          </span>
        )}
      </div>
    </div>
  );
}
```