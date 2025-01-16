"use client";
import { init, track } from "@amplitude/analytics-browser";
import { createContext, useEffect } from "react";

interface AmplitudeContextType {
  track: (eventName: string, eventProperties?: Record<string, any>) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

export const AmplitudeContext = createContext<AmplitudeContextType>({
  track: () => {},
  setUserProperties: () => {},
});

export const AmplitudeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, undefined, {
      defaultTracking: {
        sessions: true,
      },
    });
  }, []);

  const track = (eventName: string, eventProperties?: Record<string, any>) => {
    track(eventName, eventProperties);
  };

  const setUserProperties = (properties: Record<string, any>) => {
    // Implement setUserProperties logic here
  };

  const value: AmplitudeContextType = { track, setUserProperties };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};
export default AmplitudeContextProvider;
