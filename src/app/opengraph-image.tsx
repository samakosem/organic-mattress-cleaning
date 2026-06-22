import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants/business";

export const alt = "Organic Mattress Cleaning: Eco-Friendly, Non-Toxic Mattress Cleaning in Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1f7a3f 0%, #14532d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: 28,
            background: "rgba(255,255,255,0.12)",
            marginBottom: 36,
          }}
        >
          <div style={{ fontSize: 64 }}>🌿</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 30, marginTop: 18, color: "rgba(255,255,255,0.85)" }}>
          Eco-Friendly, Non-Toxic Mattress Cleaning in Los Angeles
        </div>
      </div>
    ),
    { ...size }
  );
}
