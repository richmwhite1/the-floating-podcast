import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Floating Podcast — We are aspects of God, remembering.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1530 0%, #0a0a1a 50%, #4a6b8a 100%)",
          padding: "60px",
        }}
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="80"
          height="80"
          style={{ marginBottom: "30px" }}
        >
          <line
            x1="4"
            y1="20"
            x2="28"
            y2="20"
            stroke="#c9b88a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="16" cy="14" r="7" fill="none" stroke="#c9b88a" strokeWidth="2" />
          <ellipse
            cx="16"
            cy="24"
            rx="5"
            ry="2"
            fill="none"
            stroke="#c9b88a"
            strokeWidth="0.75"
            opacity="0.4"
          />
        </svg>

        <div
          style={{
            fontSize: "52px",
            fontStyle: "italic",
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          The Floating Podcast
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          We are aspects of God, remembering.
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#c9b88a",
            marginTop: "30px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Consciousness &middot; Ego &middot; The Path Home
        </div>
      </div>
    ),
    { ...size }
  );
}
