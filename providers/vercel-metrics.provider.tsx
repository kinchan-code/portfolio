"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

const ScrollRestorerProvider = dynamic(
  () =>
    import("@/providers/scroll-restorer.provider").then(
      (mod) => mod.ScrollRestorerProvider
    ),
  { ssr: false }
);

export function VercelMetrics() {
  return (
    <>
      <ScrollRestorerProvider />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
