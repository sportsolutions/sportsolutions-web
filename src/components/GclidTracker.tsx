"use client";

import { useEffect } from "react";

export default function GclidTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    if (gclid) {
      document.cookie = `gclid=${encodeURIComponent(gclid)}; max-age=${90 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    }
  }, []);

  return null;
}
