import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1530, #0a0a1a)",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="110"
          height="110"
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
          <circle cx="16" cy="14" r="7" fill="none" stroke="#4a6b8a" strokeWidth="2" />
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
      </div>
    ),
    { ...size }
  );
}
