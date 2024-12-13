```typescript
import { useState, useCallback, useRef } from 'react';

interface UseVirtualizationOptions {
  itemHeight: number;
  overscan?: number;
  containerHeight: number;
}

export function useVirtualization<T>({
  itemHeight,
  overscan = 3,
  containerHeight
}: UseVirtualizationOptions) {
  const [scrollTop, setScrollTop] = useState(0);
  const itemsRef = useRef<T[]>([]);

  const visibleRange = useCallback(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      itemsRef.current.length,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    return {
      startIndex,
      endIndex,
      visibleItems: itemsRef.current.slice(startIndex, endIndex),
      totalHeight: itemsRef.current.length * itemHeight,
      offsetY: startIndex * itemHeight
    };
  }, [scrollTop, itemHeight, containerHeight, overscan]);

  const onScroll = useCallback((event: { nativeEvent: { contentOffset: { y: number } } }) => {
    setScrollTop(event.nativeEvent.contentOffset.y);
  }, []);

  return {
    onScroll,
    visibleRange,
    setItems: (items: T[]) => {
      itemsRef.current = items;
    }
  };
}
```