import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const siteHost = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(145deg, #f4f7fb 0%, #e7eef7 55%, #d9e6f5 100%)",
          color: "#141b29",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            fontWeight: 600,
            color: "#1d6fd8",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#4b5b73",
              letterSpacing: "0.02em",
            }}
          >
            {siteConfig.jobTitle}
          </div>
          <div
            style={{
              marginTop: 8,
              maxWidth: 820,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#5c6b82",
            }}
          >
            {siteConfig.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#5c6b82",
          }}
        >
          <span>{siteHost}</span>
          {siteConfig.availableForWork ? (
            <span style={{ color: "#1d6fd8", fontWeight: 600 }}>
              Available for work
            </span>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    size
  );
}
