import { useCallback, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

export function useRefreshOnFocus(refresh: () => Promise<void> | void) {
  const isFocused = useIsFocused();

  const handleRefresh = useCallback(async () => {
    try {
      await refresh();
    } catch (error) {
      console.error('Refresh error:', error);
    }
  }, [refresh]);

  useEffect(() => {
    if (isFocused) {
      handleRefresh();
    }
  }, [isFocused, handleRefresh]);
}