"use client";

import { useQueryTracking } from "@/hooks/use-query-tracking";

export function AnalyticsTracker() {
  useQueryTracking();
  return null;
}
