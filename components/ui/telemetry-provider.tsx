'use client';
import { useEffect, createContext } from 'react';
import { init, track } from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

export const AmplitudeContext = createContext({});

export const AmplitudeContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    init(AMPLITUDE_API_KEY!, undefined, {
      defaultTracking: {
        sessions: true
      }
    });
  }, []);
  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties: Record<string, any> | undefined
  ) => {
    track(eventName, eventProperties);
  };
  const value = { trackAmplitudeEvent };
  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};
export default AmplitudeContextProvider;
