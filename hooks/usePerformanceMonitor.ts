import { useEffect, useRef } from 'react';
import { performance, PerformanceObserver } from 'perf_hooks';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
}

const metrics: PerformanceMetrics[] = [];

export function usePerformanceMonitor(componentName: string) {
  const startTimeRef = useRef<number>();

  useEffect(() => {
    startTimeRef.current = performance.now();

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        metrics.push({
          componentName,
          renderTime: entry.duration,
          timestamp: entry.startTime
        });
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => {
      const endTime = performance.now();
      const duration = endTime - (startTimeRef.current || 0);
      
      performance.measure(
        `${componentName}_render`,
        {
          start: startTimeRef.current,
          duration
        }
      );

      observer.disconnect();
    };
  }, [componentName]);

  return {
    getMetrics: () => metrics.filter(m => m.componentName === componentName)
  };
}