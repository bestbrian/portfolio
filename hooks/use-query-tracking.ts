"use client";

import { useEffect } from "react";
import useAmplitudeContext from "./use-amplitude-context";

function getQueryParams() {
  if (typeof window === "undefined") return {};

  const params: Record<string, string> = {};
  const queryString = window.location.search.slice(1);

  queryString.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    if (key) params[key] = decodeURIComponent(value || "");
  });

  return params;
}

export function useQueryTracking() {
  const { track, setUserProperties } = useAmplitudeContext();

  useEffect(() => {
    const queryParams = getQueryParams();

    if (queryParams.source || queryParams.company) {
      track("Resume Visit", {
        source: queryParams.source || "unknown",
        company: queryParams.company || "unknown",
      });

      setUserProperties({
        traffic_source: queryParams.source,
        applied_company: queryParams.company,
      });
    }
  }, [track, setUserProperties]);
}
