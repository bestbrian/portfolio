"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4">
        <Loader2
          className="h-12 w-12 animate-spin text-primary"
          aria-label="Loading"
        />
        <p className="text-muted-foreground text-lg">Loading...</p>
      </div>
    </div>
  );
}
