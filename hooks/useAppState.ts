import { useEffect, useRef } from 'react';
import { Application } from '@nativescript/core';

export function useAppState(onChange: (state: string) => void) {
  const stateRef = useRef(Application.android ? 'active' : 'background');

  useEffect(() => {
    const handleStateChange = () => {
      const newState = Application.android ? 'active' : 'background';
      if (newState !== stateRef.current) {
        stateRef.current = newState;
        onChange(newState);
      }
    };

    Application.on(Application.resumeEvent, handleStateChange);
    Application.on(Application.suspendEvent, handleStateChange);

    return () => {
      Application.off(Application.resumeEvent, handleStateChange);
      Application.off(Application.suspendEvent, handleStateChange);
    };
  }, [onChange]);

  return stateRef.current;
}