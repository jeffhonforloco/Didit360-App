import { useState, useEffect } from 'react';
import { PodcasterService } from '../services/podcaster.service';

export function usePodcasterAnalytics(period: string = 'monthly') {
  const [data, setData] = useState<{
    labels: string[];
    values: number[];
  }>({ labels: [], values: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setIsLoading(true);
        const analytics = await PodcasterService.getListeningAnalytics(period);
        setData(analytics);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [period]);

  return { data, isLoading, error };
}